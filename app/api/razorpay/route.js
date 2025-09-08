import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import User from "@/app/models/User";
import connectDB from "@/db/connectDb";

export const POST = async (req)=> {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    let transaction = await Payment.findOne({oid: body.razorpay_order_id})  

    if(!transaction){
        return NextResponse.json({success: false ,message: "Transaction not found"});
    }

    let user = await User.findOne({username : transaction.to_user}) 
    const secretKey = user.razorpaysecret;

    let isValid = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secretKey);

    if(isValid){
        const updatePayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id}, {done: "true"}, {new: true});
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}`);
    }
    else{
        return NextResponse.json({success: false ,message: "Payment verification failed"});
    }

}