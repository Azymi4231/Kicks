"use client";
import React from "react";
import { Formik } from "formik";
import LoginForm from "../components/login-form";
import { liOptions } from "./login-page-constans";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSEGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MESSURMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return (
    <div className="flex flex-col gap-6 sm:flex-row">
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
            signInWithEmailAndPassword(auth, values.email, values.password)
              .then((userCredential) => {
                router.push("product");
              })
              .catch((error) => {});
          }}
        >
          <LoginForm />
        </Formik>
      </div>
      <div className="flex w-full flex-col gap-6 bg-WhiteMain px-6 py-4 rounded-2xl">
        <h1 className="flex font-semibold text-2xl text-DarkGray">
          Join Kicks Club Get <br /> Rewarded Today.
        </h1>
        <p className="font-semibold text-DarkGray text-sm">
          As kicks club member you get rewarded with what you love for doing
          what you love. Sign up today and receive immediate access to these
          Level 1 benefits:
        </p>
        <ul className="list-disc text-DarkGray font-semibold text-sm px-4">
          {liOptions.map((item, id) => (
            <li key={id}>{item.name}</li>
          ))}
        </ul>
        <p className="text-DarkGray font-semibold text-sm">
          Join now to start earning points, reach new levels and unlock more
          rewards and benefits from adiClub.​
        </p>
        <button
          type="submit"
          className="bg-DarkGray text-Gray rounded-lg text-left px-4 py-3 gap-10 font-medium text-sm  "
        >
          JOIN THE CLUB
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
