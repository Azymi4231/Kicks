"use client";
import React from "react";
import { Formik } from "formik";
import LoginForm from "../components/login-form";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-DarkGray font-semibold gap-2">
        <h1 className="text-2xl">Login</h1>
        <div className="flex">
          <p className="border-b border-DarkGray">Login to join club</p>
        </div>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          checkbox: false,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <LoginForm />
      </Formik>
    </div>
  );
};

export default LoginPage;
