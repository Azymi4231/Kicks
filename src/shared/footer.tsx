"use client";
import EmailForm from "@/features/login-page/components/email-form";
import { Formik } from "formik";
import React from "react";
import FooterLogo from "./svg/footer-logo-svg";
import Plus from "./svg/plus-svg";
import TikTokLogo from "./svg/tiktok-logo-svg";
import InstagramLogo from "./svg/instagram-logo-svg";
import FacebookLogo from "./svg/facebook-logo-svg";
import FooterLogoCut from "./svg/footer-kicks-cut-logo";

const Footer = () => {
  return (
    <div>
      <div className="bg-Blue flex flex-col w-full h-full rounded-t-3xl gap-8 p-4">
        <div className="gap-2 text-White">
          <h1 className="font-semibold text-3xl">
            Join our KicksPlus <br /> Club & get 15% off
          </h1>
          <p className="pt-2 font-semibold">
            Sign up for free! Join the community.
          </p>
        </div>
        <Formik
          initialValues={{}}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <EmailForm />
        </Formik>
        <div className="flex flex-col ">
          <Plus />
          <FooterLogo />
        </div>
      </div>
      <div className="bg-DarkGray flex flex-col w-full h-full rounded-t-3xl px-6 py-8 text-White font-semibold gap-10">
        <div className="gap-6">
          <h1 className="text-Yellow text-2xl">About us</h1>
          <p className="">
            We are the biggest hyperstore in the universe. We got you all cover
            with our exclusive collections and latest drops.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-Yellow text-xl">Categories</h2>
          <div className="flex flex-col gap-2 font-semibold">
            <p>Runners</p>
            <p>Sneakers</p>
            <p>Basketball</p>
            <p>Outdoor</p>
            <p>Golf</p>
            <p>Hiking</p>
          </div>
          <h3 className="text-Yellow text-xl">Company</h3>
          <div className="flex flex-col gap-2 font-semibold">
            <p>About</p>
            <p>Contact</p>
            <p>Blogs</p>
          </div>
          <h4 className="text-Yellow text-xl">Follow Us</h4>
          <div className="flex flex-row gap-4">
            <InstagramLogo />
            <FacebookLogo />
            <TikTokLogo />
          </div>
          <FooterLogoCut />
        </div>
      </div>
    </div>
  );
};

export default Footer;
