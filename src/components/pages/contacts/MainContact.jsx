import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailsJs from "@emailjs/browser";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { useForm } from "react-hook-form";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const MainContact = () => {
  const { t, i18n } = useTranslation();
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

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
      <Container
        className={classes.logoSm}
        elevation={5}
        style={{
          background:
            "linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          marginTop: "40px",
          backdropFilter: "blur(15px)",
          boxShadow: "5px 5px 5px 5px rgba(118, 108, 108, 0.507)",
        }}
      >
        <link rel="icon" />
        <h2
          className="titleText"
          style={{ textAlign: "center", color: "black", fontSize: "2rem" }}
        >
          {t("contactWithUs")}
        </h2>
        <br />
        <div
          className="contact-container"
          style={{
            margin: "auto",
            background:
              "linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            padding: "10px",
            display: "flex",
            backdropFilter: "blur(15px)",
            boxShadow: "5px 5px 5px 5px rgba(118, 108, 108, 0.507)",
          }}
        >
          <div
            className="contact-info"
            style={{
              borderRadius: "15px",
              background:
                "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
              flex: "0 1 40%",
              padding: "40px",
              color: "white",
              // display: "flex",
              flexDirection: "column",
            }}
          >
            <h4
              style={{
                fontSize: "2rem",
                fontWeight: "500",
                margin: "0",
              }}
            >
              {t("title")}
            </h4>
            <p
              style={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "300",
                marginBottom: "2rem",
              }}
            >
              {t("pText")}
            </p>
            <div
              className="icon-text"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <i className="fa fa-phone"></i>
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  textAlign: "justify",
                }}
              >
                <LocalPhoneIcon />
                +374 10 651-631
              </span>
            </div>
            <div
              className="icon-text"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <i className="fa fa-envelope"></i>
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  textAlign: "justify",
                }}
              >
                <MailOutlineIcon />
                info@cep.am
              </span>
            </div>
            <div
              className="icon-text"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  textAlign: "justify",
                }}
              >
                <MailOutlineIcon />
                antifraud@epiu.am
              </span>
            </div>
            <div
              className="icon-text"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <i className="fa fa-map-marker"></i>
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  textAlign: "justify",
                }}
              >
                <LocationOnIcon />
                {t("street")}
              </span>
            </div>
            <div
              className="social-media"
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "space-between",
                ":hover": {
                  color: "black",
                },
              }}
            >
              <a
                className="icon-circle"
                style={{
                  flex: "0 0 40px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "40px",
                  borderRadius: "50%",
                  transition: ".3s all ease-in-out",
                  fontSize: "1.8rem",
                }}
                href="https://www.facebook.com/epiu.am/"
                target="_blank"
              >
                <FiFacebook />
              </a>
              <a
                className="icon-circle"
                style={{
                  flex: "0 0 40px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "40px",
                  borderRadius: "50%",
                  transition: ".3s all ease-in-out",
                  fontSize: "1.8rem",
                }}
                href="https://www.linkedin.com/in/epiu-state-agency-441a21155/"
                target="_blank"
              >
                <FiLinkedin />
              </a>
              <a
                className="icon-circle"
                style={{
                  flex: "0 0 40px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "40px",
                  borderRadius: "50%",
                  transition: ".3s all ease-in-out",
                  fontSize: "1.8rem",
                }}
                href="https://www.youtube.com/channel/UCQ62HVkKIOiqa4GtSEn6QYw"
                target="_blank"
              >
                <FiYoutube />
              </a>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendMail}
            style={{ padding: "40px", width: "100%" }}
          >
            <div className="col">
              <div
                className="form-group"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  flex: "0 1 100%",
                  paddingRight: "40px",
                }}
              >
                <label>{t("contactName")}</label>
                <input
                  type="text"
                  name="senderName"
                  value={senderName}
                  onChange={handleName}
                  required
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "15px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "black",
                    background: "transparent",
                    borderBottom: "1px solid rgba(255, 255, 255, .4)",
                    transition: "all 0.3s ease-in-out",
                    marginBottom: "3rem",
                  }}
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
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "15px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "black",
                    background: "transparent",
                    borderBottom: "1px solid rgba(255, 255, 255, .4)",
                    transition: "all 0.3s ease-in-out",
                    marginBottom: "3rem",
                  }}
                />
              </div>{" "}
              <form className="file" style={{ justifyContent: "flex-start" }}>
                <input
                  {...register("value_name")}
                  type="file"
                  name="picture"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "15px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "black",
                    background: "transparent",
                    borderBottom: "1px solid rgba(255, 255, 255, .4)",
                    transition: "all 0.3s ease-in-out",
                    marginBottom: "3rem",
                  }}
                />
              </form>
              <div className="col">
                <div className="form-group solo">
                  <label>{t("contactMessage")}</label>
                  <input
                    name="message"
                    value={message}
                    onChange={handleMessage}
                    required
                    style={{
                      border: "none",
                      cursor: "pointer",
                      padding: "15px",
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "black",
                      background: "transparent",
                      borderBottom: "1px solid rgba(255, 255, 255, .4)",
                      transition: "all 0.3s ease-in-out",
                      marginBottom: "3rem",
                    }}
                  />
                  {/* <textarea
                  name="message"
                  value={message}
                  onChange={handleMessage}
                  required
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "5px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "black",
                    background: "transparent",
                    borderBottom: "1px solid rgba(255, 255, 255, .4)",
                    transition: "all 0.3s ease-in-out",
                    marginBottom: "3rem",
                  }}
                ></textarea> */}
                </div>
              </div>
              <div className="col">
                <div className="form-group solo right">
                  <button
                    style={{
                      width: "200px",
                      height: "60px",
                      cursor: "pointer",
                      border: "none",
                      textTransform: "uppercase",
                      borderRadius: "5px",
                      background: "grey",
                    }}
                    type="submit"
                    id="fcf-button"
                    className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
                  >
                    {t("button")}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default MainContact;
