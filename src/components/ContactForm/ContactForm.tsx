"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./styles.module.scss";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Sending");

    const data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          name="name"
          className={styles.inputField}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={handleEmailChange}
          value={email}
          name="email"
          className={styles.inputField}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          onChange={handleMessageChange}
          value={message}
          name="message"
          className={styles.inputField}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
