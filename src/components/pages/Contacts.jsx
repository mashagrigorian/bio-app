import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./contacts.css";
import ContactInfo from "./ContactInfo";
import emailsJs from "@emailjs/browser";
import Map from "../Map";
import Hotline from "./Hotline";
import MainContact from "../../MainContact";
import "../../main.scss";

const Contacts = () => {
  const { t, i18n } = useTranslation();
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleName = (e) => {
    setSenderName(e.target.value);
  };
  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();

    emailsJs
      .sendForm(
        "service_noipr0n",
        "template_m5sgrtc",
        form.current,
        "nkkLtA7GvAAfB3FQb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* <form ref={form} onSubmit={sendMail}>
        <div className="fcf-body">
          <div id="fcf-form">
            <h3>{t("letterExample")}</h3>

            <div className="fcf-form-group">
              <label htmlFor="Name" className="fcf-label">
                {t("contactName")}
              </label>
              <div className="fcf-input-group">
                <input
                  type="text"
                  name="senderName"
                  value={senderName}
                  onChange={handleName}
                  y
                  required
                  placeholder={t("placeholderName")}
                />
              </div>
            </div>
            <div className="fcf-form-group">
              <label htmlFor="Email" className="fcf-label">
                {t("contactEmail")}
              </label>
              <div className="fcf-input-group">
                <input
                  type="email"
                  name="senderEmail"
                  value={senderEmail}
                  onChange={handleEmail}
                  required
                  placeholder={t("placeholderEmail")}
                />
              </div>{" "}
            </div>
            <div className="fcf-form-group">
              <label htmlFor="Message" className="fcf-label">
                {t("contactMessage")}
              </label>
              <div className="fcf-input-group">
                <textarea
                  name="message"
                  value={message}
                  onChange={handleMessage}
                  required
                  placeholder={t("placeholderMessage")}
                ></textarea>
              </div>
            </div>
            <div className="fcf-form-group">
              <button
                type="submit"
                id="fcf-button"
                className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
              >
                {t("button")}
              </button>
            </div>
          </div>
        </div>
      </form> */}
      <MainContact />
    </>
  );
};

export default Contacts;
