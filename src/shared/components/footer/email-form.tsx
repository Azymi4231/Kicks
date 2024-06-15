import { Field, Form } from "formik";
import React from "react";

const EmailForm = () => {
  const formOptions = [{ id: "email adress", placeholder: "Email adress" }];

  return (
    <Form noValidate className="flex flex-row gap-2">
      {formOptions.map((item) => (
        <div className="flex w-full flex-row-reverse justify-end items-start gap-2 ">
          <Field
            className="rounded-lg border-White border bg-Blue px-4 py-3 text-White w-full"
            id={item.id}
            name={item.id}
            placeholder={item.placeholder}
          />
        </div>
      ))}

      <button
        type="submit"
        className=" bg-DarkGray px-5 py-2 rounded-lg text-White font-medium text-sm gap-1"
      >
        SUBMIT
      </button>
    </Form>
  );
};

export default EmailForm;
