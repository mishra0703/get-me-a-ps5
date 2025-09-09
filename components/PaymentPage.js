"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingBox from "@/components/LoadingBox";
import { initiate, fetchUserData, fetchPayments } from "@/actions/useraction";

const Paymentpage = ({ username, firstName }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);

  const getUserData = async () => {
    let user = await fetchUserData(username);
    setCurrentUser(user);
    let transactions = await fetchPayments(username);
    setPayments(transactions);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      setShowModal(true);
      const timer = setTimeout(() => {
        router.push("/login");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return <>{showModal && <LoadingBox />}</>;
  }

  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentForm);
    let orderId = a.id;

    var options = {
      key: currentUser.razorpayid,
      amount: amount,
      currency: "INR",
      name: "Get Me A PS5",
      description: "Test Transaction",
      image: "/logo.png",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: `${paymentForm.name}`,
        email: `${paymentForm.name}@gmail.com`,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="my-[8vh] mb-20">
        <div className="relative w-full h-[80vh] mb-40">
          <img
            src={currentUser.coverpic || "/default-cover.jpg"}
            alt="Cover"
            className="w-full h-full object-cover object-bottom"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-black/5"></div>

          <div className="profile-section w-full flex items-end justify-center gap-60 absolute -bottom-15">
            <div className="flex max-sm:flex-col items-center space-x-5">
              <img
                src={currentUser.profilepic || "/pfp.svg"}
                alt="Profile"
                loading="lazy"
                className="w-40 h-40 rounded-full border-4 border-black object-cover object-bottom"
              />
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-4xl font-bold tracking-wider max-sm:tracking-normal">
                  @{currentUser.username}
                </h1>
                <p className="text-md max-sm:text-sm font-sans text-white/80">
                  Let&apos;s help {currentUser.name} get a PS5
                </p>
                <div className="supporters text-lg max-sm:text-xl font-medium">
                  {payments.length < 1 ? (
                    <div className="text-xl font-bold max-sm:text-center">
                      Become the first one to support me
                    </div>
                  ) : (
                    <div className = 'flex gap-1 max-sm:flex-col max-sm:text-center'>
                      <div>
                        {payments.length}{" "}
                        {payments.length == 1 ? "person has" : "people have"} donated
                      </div>
                      <div>
                        <span className="max-sm:hidden">•</span> {"  "}{" "}
                        {currentUser.name} has raised{" "}
                        <span className="font-bold text-green-700 ">
                          ₹{payments.reduce((a, b) => a + b.amount, 0) / 100}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-content w-full flex justify-center gap-15 max-sm:flex-col max-sm:items-center">
          <div className="p-[2px] rounded-[30px] bg-gradient-to-r from-pink-500 to-cyan-400 w-2/5 max-sm:w-[90%] min-h-[200px] max-sm:min-h-max">
            <div className="support-box w-full h-full p-5 text-white bg-neutral-900 rounded-[30px] flex flex-col gap-2">
              <h1 className="text-4xl font-bold mb-5 text-red-600 ">
                Supporters
              </h1>

              {payments.length < 1 ? (
                <div className="text-center text-2xl font-bold mt-10">
                  No Payments Yet
                </div>
              ) : (
                payments.map((payment, i) => (
                  <span key={i} className="text-lg py-2">
                    {payment.name} send{" "}
                    <span className="font-bold text-green-600">
                      ₹{payment.amount / 100}{" "}
                    </span>
                    with a message "{payment.message}"
                  </span>
                ))
              )}
            </div>
          </div>

          <div className="p-[2px] rounded-[30px] bg-gradient-to-r from-cyan-400 to-[#9C27B0] w-2/5 max-sm:w-[90%] h-max">
            <div className="support-box w-full h-max p-5 text-white bg-neutral-900 rounded-[30px] flex flex-col gap-2">
              <h1 className="text-4xl font-bold mb-5 text-white/85 flex gap-2 items-center">
                Make a payment
              </h1>
              <form className="flex flex-col gap-5 w-full">
                <input
                  name="name"
                  onChange={handleChange}
                  value={paymentForm.name}
                  className="w-19/20 focus:outline-none border-2 border-neutral-500 p-2 rounded-xl "
                  type="text"
                  placeholder="Enter Name"
                />
                <input
                  name="message"
                  onChange={handleChange}
                  value={paymentForm.message}
                  className="w-19/20 focus:outline-none border-2 border-neutral-500 p-2 rounded-xl "
                  type="text"
                  placeholder="Enter Message"
                />
                <input
                  name="amount"
                  onChange={handleChange}
                  value={paymentForm.amount}
                  className="w-19/20 focus:outline-none border-2 border-neutral-500 p-2 rounded-xl "
                  type="text"
                  placeholder="Enter Amount"
                />
                <button
                  type="button"
                  className="pay-btn "
                  onClick={() => pay(Number.parseInt(paymentForm.amount) * 100)}
                  disabled={
                    paymentForm.name?.length < 2 ||
                    paymentForm.message?.length < 4 ||
                    paymentForm.amount?.length < 1
                  }
                >
                  <span className="btn-text">Pay Now</span>
                  <div className="icon-container">
                    <svg viewBox="0 0 24 24" className="icon card-icon">
                      <path
                        d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg viewBox="0 0 24 24" className="icon payment-icon">
                      <path
                        d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg viewBox="0 0 24 24" className="icon dollar-icon">
                      <path
                        d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 24 24"
                      className="icon wallet-icon default-icon"
                    >
                      <path
                        d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg viewBox="0 0 24 24" className="icon check-icon">
                      <path
                        d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentpage;
