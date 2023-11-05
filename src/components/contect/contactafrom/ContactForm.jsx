import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./form.css";

const ContactForm = () => {
  const personSchema = z.object({
    name: z.string({ message: "First name is required" }),
    email: z.string({ message: "Email is required" }).email({
      message: "Must be valid email",
    }),
    message: z.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personSchema),
  });

  const onSubmit = () => {};

  return (
    <div className="formBox">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <fieldset>
          <div>
            <label>Name</label>
            <input type="text" {...register("name")} placeholder="Enter here" />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter here"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              rows={5}
              cols={100}
              {...register("message")}
              placeholder="Enter here"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
