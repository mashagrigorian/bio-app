import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailsJs from "@emailjs/browser";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import "./main.scss";
import { useForm } from "react-hook-form";

const MainContact = () => {
  const { t, i18n } = useTranslation();
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

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
      <link rel="icon" />
      <h1 className="titleText">{t("contactWithUs")}</h1>
      <div id="contact-container">
        <div className="contact-info">
          <h4>{t("title")}</h4>
          <p>{t("pText")}</p>
          <div className="icon-text">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>+374 10 651-631</span>
          </div>
          <div className="icon-text">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>info@cep.am antifraud@epiu.am</span>
          </div>
          <div className="icon-text">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>{t("street")}</span>
          </div>
          <div className="social-media">
            <a
              className="icon-circle"
              href="https://www.facebook.com/epiu.am/"
              target="_blank"
            >
              <FiFacebook />
            </a>
            <a
              className="icon-circle"
              href="https://www.linkedin.com/in/epiu-state-agency-441a21155/"
              target="_blank"
            >
              <FiLinkedin />
            </a>
            <a
              className="icon-circle"
              href="https://www.youtube.com/channel/UCQ62HVkKIOiqa4GtSEn6QYw"
              target="_blank"
            >
              <FiYoutube />
            </a>
            {/* <a
              href="https://www.facebook.com/epiu.am/"
              target="_blank"
              className="icon-circle"
            >
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCQ62HVkKIOiqa4GtSEn6QYw"
              target="_blank"
              className="icon-circle"
            >
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/epiu-state-agency-441a21155/"
              target="_blank"
              className="icon-circle"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a> */}
          </div>
        </div>
        <form ref={form} onSubmit={sendMail}>
          <div className="col">
            <div className="form-group">
              <label>{t("contactName")}</label>
              <input
                type="text"
                name="senderName"
                value={senderName}
                onChange={handleName}
                required
              />
            </div>
            <div className="form-group">
              <label>{t("contactEmail")}</label>
              <input
                type="email"
                name="senderEmail"
                value={senderEmail}
                onChange={handleEmail}
                required
              />
            </div>{" "}
            <form className="file">
              <input {...register("value_name")} type="file" name="picture" />
            </form>
            <div className="col">
              <div className="form-group solo">
                <label>{t("contactMessage")}</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={handleMessage}
                  required
                ></textarea>
              </div>
            </div>
            <div className="col">
              <div className="form-group solo right">
                <button
                  type="submit"
                  id="fcf-button"
                  className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
                  // className="primary"
                >
                  {t("button")}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MainContact;
