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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="formBox">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <fieldset>
          <div>
            <label>Name</label>
            <input type="text" {...register("name")} placeholder="Enter here" />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter here"
            />
            {errors.email && <span>{errors.email.message}</span>}
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
        <div>
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
