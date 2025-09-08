import React from "react";
import Paymentpage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import User from "../models/User";

const Username = async ({ params }) => {
  const username = decodeURIComponent(params.username);
  const firstName = username.split(" ")[0];

  const CheckUser = async ()=> {
    await connectDB()

    let user = await User.findOne({username : username})

    if(!user){
      return notFound()
    }
  }

  await CheckUser()

  return (
    <Paymentpage username={username} firstName={firstName} />
  );
};

export default Username;

export async function generateMetadata({ params }) {
  const username = decodeURIComponent(params.username);
  const firstName = username.split(" ")[0];

  return {
    title: `Support ${firstName} - Get Me A PS5`,
  };
}
