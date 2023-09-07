import React from "react";
import { Navbar } from "@components";
import styles from "./styles.module.scss";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* <img className={styles.img} src={"images/platesingarage.jpg"} /> */}
      <div className={styles.item}>
        <Navbar />

        <section className={styles.contact}>
          <div className={styles.content}>
            <h1 className={styles.title}>聯絡我們/合作</h1>
          </div>
          <div className={styles.contactwrapper}>
            <div className={styles.contactInfo}>
              <div className={styles.box}>
                <div className={styles.iconwrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                </div>
                <div className={styles.text}>
                  <h3>Phone</h3>
                  <p>9226 5737(李生)</p>
                </div>
              </div>
            </div>
            <div className={styles.contactForm}>
              <form>
                <h2>Full Name</h2>
                <div>
                  <input
                    className={styles.inputBox}
                    type="text"
                    name=""
                    required
                  />
                </div>
                <h2>Email</h2>
                <div>
                  <input
                    className={styles.inputBox}
                    type="text"
                    name=""
                    required
                  />
                </div>
                <h2>Phone</h2>
                <div>
                  <input
                    className={styles.inputBox}
                    type="text"
                    name=""
                    required
                  />
                </div>
                <h2>Message</h2>
                <div>
                  <textarea
                    className={styles.inputBox}
                    placeholder="Type your Message..."
                    required
                  />
                  {/* <span>Type your Message...</span> */}
                </div>
                <div className={styles.inputBox}>
                  <input type="submit" name="" value="submit" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
