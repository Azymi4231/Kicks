"use client";
import EmailForm from "@/shared/components/footer/email-form";
import { Formik } from "formik";
import React from "react";
import FooterLogo from "../../svg/footer-logo-svg";
import Plus from "../../svg/plus-svg";
import TikTokLogo from "../../svg/tiktok-logo-svg";
import InstagramLogo from "../../svg/instagram-logo-svg";
import FacebookLogo from "../../svg/facebook-logo-svg";
import FooterLogoCut from "../../svg/footer-kicks-cut-logo";
import {
  categories,
  company,
} from "@/shared/components/footer/footer-constans";

const Footer = () => {
  return (
    <div className="bg-Blue rounded-t-3xl">
      <div className="bg-Blue flex flex-col w-full rounded-t-3xl gap-8 p-4">
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

        <div className="flex">
          <FooterLogo />
          <div className="-mt-2 -ml-1">
            <Plus />
          </div>
        </div>
      </div>
      <div className="bg-DarkGray flex flex-col w-full rounded-t-3xl px-6 pt-8 text-White font-semibold gap-10">
        <h1 className="text-Yellow text-2xl">About us</h1>
        <p>
          We are the biggest hyperstore in the universe. We got you all cover
          with our exclusive collections and latest drops.
        </p>
        <div className="flex flex-col gap-6">
          <h1 className="text-Yellow text-xl">Categories</h1>
          <div className="flex flex-col gap-2 font-semibold">
            {categories.map((item) => (
              <p>{item.name}</p>
            ))}
          </div>
          <h1 className="text-Yellow text-xl">Company</h1>
          <div className="flex flex-col gap-2 font-semibold">
            {company.map((item) => (
              <p>{item.name}</p>
            ))}
          </div>
          <h1 className="text-Yellow text-xl">Follow Us</h1>
          <div className="flex flex-row gap-4">
            <InstagramLogo />
            <FacebookLogo />
            <TikTokLogo />
          </div>
          <div className="flex">
            <FooterLogoCut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
