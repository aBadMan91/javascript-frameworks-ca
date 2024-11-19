import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as styles from "./index.styles";

const schema = yup.object({
  fullName: yup.string().min(3, "Full Name must be at least 3 characters").required("Full Name is required"),
  email: yup.string().email("Must be a valid email address").required("Email is required"),
  subject: yup.string().min(3, "Subject must be at least 3 characters").required("Subject is required"),
  message: yup.string().min(3, "Message must be at least 3 characters").required("Message is required"),
});

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <styles.PageContainer>
      <h1>Contact Us</h1>
      <styles.ContactContainer>
        <styles.ContactForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Full Name:</label>
              <input type="text" {...register("fullName")} />
              <styles.ErrorMessage>
                <p>{errors.fullName?.message}</p>
              </styles.ErrorMessage>
            </div>
            <div>
              <label>Email:</label>
              <input type="email" {...register("email")} />
              <styles.ErrorMessage>
                <p>{errors.email?.message}</p>
              </styles.ErrorMessage>
            </div>
            <div>
              <label>Subject:</label>
              <input type="text" {...register("subject")} />
              <styles.ErrorMessage>
                <p>{errors.subject?.message}</p>
              </styles.ErrorMessage>
            </div>
            <div>
              <label>Message:</label>
              <textarea {...register("message")} />
              <styles.ErrorMessage>
                <p>{errors.message?.message}</p>
              </styles.ErrorMessage>
            </div>
            <button type="submit">Submit</button>
          </form>
        </styles.ContactForm>
      </styles.ContactContainer>
    </styles.PageContainer>
  );
}
