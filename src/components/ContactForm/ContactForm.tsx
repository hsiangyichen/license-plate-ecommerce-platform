"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styles from "./styles.module.scss";
import Person from "@assets/icons/person.svg";
import Email from "@assets/icons/email.svg";
import Phone from "@assets/icons/phone.svg";
import Instagram from "@assets/icons/instagram.svg";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const SuccessPopup = () => {
    return (
      <div className={styles.popup}>
        <div className={styles.popupInner}>
          <h2>Success!</h2>
          <p>Your message has been submitted successfully.</p>
        </div>

        <button onClick={closePopup}>Close</button>
      </div>
    );
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (e: FormData): void => {
    console.log("e", e);
    console.log("Sending");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then(() => {
        console.log("Response received");
        console.log("Response succeeded!");
        setSubmitted(true);
        reset();

        openPopup();
      })
      .catch((err) => {
        console.log("err:" + err);
      });
  };

  return (
    <div className={styles.container}>
      <img className={styles.img} src={"images/contactFormCar.jpg"} />
      <div className={styles.item}>
        <div className={styles.form}>
          <div className={styles.formLeft}>
            <div className={styles.infoItem}>
              <Person width="30px" height="30px" fill="rgba(27,29,30,0.4)" />
              <h2>李生</h2>
            </div>
            <div className={styles.infoItem}>
              <Email width="28px" height="28px" fill="rgba(27,29,30,0.4)" />
              <h2>218luckynumber@gmail.com</h2>
            </div>
            <div className={styles.infoItem}>
              <Phone width="28px" height="28px" fill="rgba(27,29,30,0.4)" />
              <h2>9226 5737</h2>
            </div>
            <div className={styles.infoItem}>
              <Instagram width="30px" height="30px" fill="rgba(27,29,30,0.4)" />
              <h2>218luckynumber</h2>
            </div>
          </div>
          <div className={styles.formRight}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={styles.inputItem}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input type="text" placeholder="Name" {...field} />
                  )}
                />
                {errors.name && (
                  <span className={styles.error}>Name is required</span>
                )}
              </div>
              <div className={styles.inputItem}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input type="email" {...field} placeholder="Email" />
                  )}
                />
                {errors.email && (
                  <span className={styles.error}>Invalid email address</span>
                )}
              </div>
              <div className={styles.inputItem}>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Message is required",
                  }}
                  render={({ field }) => (
                    <textarea {...field} placeholder="Message" />
                  )}
                />
                {errors.message && (
                  <span className={styles.error}>Message is required</span>
                )}
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.button} type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div>{isPopupOpen && <SuccessPopup />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
