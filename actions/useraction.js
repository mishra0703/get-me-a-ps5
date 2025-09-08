"use server";

import Razorpay from "razorpay";
import Payment from "@/app/models/Payment";
import User from "@/app/models/User";
import connectDB from "@/db/connectDb";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  let user = await User.findOne({ username: to_username });
  const secretKey = user.razorpaysecret;

  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: secretKey,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  // create a payment object which shows a pending payment in DB
  await Payment.create({
    oid: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchUserData = async (username) => {
  await connectDB();
  let userData = await User.findOne({ username: username }).lean();

  return JSON.parse(JSON.stringify(userData));
};

export const fetchPayments = async (username) => {
  await connectDB();
  let transaction = await Payment.find({ to_user: username, done: "true" })
    .sort({ amount: -1 })
    .limit(10)
    .lean();
  return JSON.parse(JSON.stringify(transaction));
};

export const updateProfile = async (data, oldusername) => {
  await connectDB();

  let dbData = Object.fromEntries(data);

  if (oldusername !== dbData.username) {
    let user = await User.findOne({ username: dbData.username });
    if (user) {
      return { error: "Username already exists" };
    }
    await User.updateOne({ email: dbData.email }, dbData);
    await Payment.updateMany(
      { to_user: oldusername },
      { to_user: dbData.username }
    );
  } else {
    await User.updateOne({ email: dbData.email }, dbData);
  }
};

export const searchUsers = async (searchTerm) => {
  await connectDB();

  if (!searchTerm || searchTerm.trim() === "") {
    return [];
  }

  try {
    const users = await User.find({
      $and: [
        { name: { $exists: true, $ne: null, $ne: "" } },
        {
          $or: [
            { name: { $regex: searchTerm.trim(), $options: "i" } },
            { username: { $regex: searchTerm.trim(), $options: "i" } },
          ],
        },
      ],
    }).lean();

    
    const usersWithStats = await Promise.all(
      users.map(async (user) => {
        const payments = await Payment.find({
          to_user: user.username,
          done: true,
        });

        const totalAmount = payments.reduce(
          (sum, payment) => sum + payment.amount,
          0
        );
        const donorCount = payments.length;

        return {
          ...user,
          totalAmount,
          donorCount,
        };
      })
    );

    return JSON.parse(JSON.stringify(usersWithStats));
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};
