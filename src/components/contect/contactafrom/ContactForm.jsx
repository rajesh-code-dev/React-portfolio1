import React from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = () => {};

  return (
    <div className="formBox">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <fieldset>
          <label>
            <input type="text" placeholder="Enter here" />
            Name
          </label>
        </fieldset>
      </form>
    </div>
  );
};
