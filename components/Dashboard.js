"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingBox from "@/components/LoadingBox";
import { fetchUserData, updateProfile } from "@/actions/useraction";

const Dashboard = () => {
  const [form, setForm] = useState({});
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);


  const getData = async () => {
    let userData = await fetchUserData(session.user.name);
    setForm(userData);
  };


  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      setShowModal(true);
      const timer = setTimeout(() => {
        router.push("/login");
      }, 3000);

      return () => clearTimeout(timer);
    }
    else{
      getData();
    }
  }, [session, status, router]);

  
  
  if (status === "loading" || !session) {
    return <>{showModal && <LoadingBox />}</>;
  }

  
  
  const handleSubmit = async (e) => {
    let UpdateIt =  await updateProfile(e, session.user.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="text-white container mt-[15vh] mb-30">
      <h1 className="text-center font-bold text-5xl max-sm:text-2xl my-5 mx-auto">
        Complete your profile to get Funds
      </h1>
      <div className="cont w-full mt-20">
        <div className="form_area w-1/2 max-sm:w-[90%]">
          <form className="w-full" action={handleSubmit}>
            <div className="form_group mt-10">
              <label className="sub_title" htmlFor="name">
                Name
              </label>
              <input
                onChange={handleChange}
                value={form.name ? form.name : ""}
                name="name"
                id="name"
                placeholder="Enter your full name"
                className="form_style"
                type="text"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleChange}
                value={form.email ? form.email : ""}
                name="email"
                id="email"
                placeholder="Enter your email"
                className="form_style"
                type="text"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="username">
                Username
              </label>
              <input
                onChange={handleChange}
                value={form.username ? form.username : ""}
                name="username"
                id="username"
                placeholder="Enter your username"
                className="form_style"
                type="text"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="profilepic">
                Profile Pic URL
              </label>
              <input
                onChange={handleChange}
                value={form.profilepic ? form.profilepic : ""}
                name="profilepic"
                id="profilepic"
                placeholder="Enter url"
                className="form_style"
                type="profile-pic"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="coverpic">
                Cover Pic URL
              </label>
              <input
                onChange={handleChange}
                value={form.coverpic ? form.coverpic : ""}
                placeholder="Enter url"
                name="coverpic"
                id="coverpic"
                className="form_style"
                type="cover-pic"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="razorpayid">
                Razorpay ID
              </label>
              <input
                onChange={handleChange}
                value={form.razorpayid ? form.razorpayid : ""}
                name="razorpayid"
                id="razorpayid"
                placeholder="Enter your Razorpay Id"
                className="form_style"
                type="text"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="razorpaysecret">
                Razorpay Secret
              </label>
              <input
                onChange={handleChange}
                value={form.razorpaysecret ? form.razorpaysecret : ""}
                name="razorpaysecret"
                id="razorpaysecret"
                placeholder="Enter your Razorpay Secret"
                className="form_style"
                type="text"
              />
            </div>
            <div>
              <button className="signup-btn" type="submit">
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
