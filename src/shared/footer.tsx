"use client";
import EmailForm from "@/features/login-page/components/email-form";
import { Formik } from "formik";
import React from "react";

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
        <div className="bg-DarkGray flex w-full h-full rounded-t-3xl px-6 py-4">
          456
        </div>
      </div>
    </div>
  );
};

export default Footer;
