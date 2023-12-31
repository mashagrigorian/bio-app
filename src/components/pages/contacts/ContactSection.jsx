import React from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "react-i18next";

const ContactSectionStyle = styled.div`
  .contactSection__wrapper {
    color: white;
    display: flex;
    gap: 2px;
    margin-top: 2rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: gray;
    left: 51%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 10px;
    }
  }
`;

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<LocalPhoneIcon />} text="+374 10 999-999" />
            <ContactInfoItem icon={<MailOutlineIcon />} text="info@99.am" />
            <ContactInfoItem icon={<LocationOnIcon />} text={t("street")} />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
