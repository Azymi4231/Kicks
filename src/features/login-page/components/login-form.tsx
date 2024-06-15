import { Field, Form } from "formik";
import React from "react";

const LoginForm = () => {
  const formOptions = [
    { id: "email", placeholder: "Email" },
    { id: "password", placeholder: "Password" },
    { id: "checkbox", placeholder: "Checkbox" },
  ];

  return (
    <Form noValidate className="flex flex-col gap-6">
      {formOptions.map((item) => (
        <div className="flex w-full flex-row-reverse justify-end items-start gap-2">
          {item.id === "checkbox" ? (
            <label htmlFor={item.id} className="text-DarkGray text-sm">
              Keep me logged in - applies to all log in options below. More info
            </label>
          ) : null}
          <Field
            className={`rounded-lg border-DarkGray border bg-Gray px-4 py-3 ${item.id === "checkbox" ? "size-6 accent-DarkGray" : "grow"} `}
            id={item.id}
            name={item.id}
            placeholder={item.placeholder}
            type={item.id}
          />
        </div>
      ))}

      <button
        type="submit"
        className="text-left bg-DarkGray px-4 py-3 rounded-lg text-Gray font-medium"
      >
        EMAIL LOGIN
      </button>
    </Form>
  );
};

export default LoginForm;
