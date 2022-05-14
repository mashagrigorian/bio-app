import React, {useRef, useState} from "react";
import SocialFollow from "../../SocialFollow";
import ContactInfo from "../../ContactInfo";
import emailsJs from '@emailjs/browser';

const Contacts = () => {
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

      emailsJs.sendForm('service_noipr0n', 'template_m5sgrtc', form.current, 'nkkLtA7GvAAfB3FQb')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
    <>
      <form   ref={form}  onSubmit={sendMail}>
        <input
          type="text"
          name="senderName"
          value={senderName}
          onChange={handleName}
          required
          placeholder="Your name"
        />
        <input
          type="email"
          name="senderEmail"
          value={senderEmail}
          onChange={handleEmail}
          required
          placeholder="Your email address"
        />
        <textarea
          name="message"
          value={message}
          onChange={handleMessage}
          required
          placeholder="Your message"
        />
        <button type="submit">Send email</button>
      </form>
      <ContactInfo />
      <SocialFollow />
    </>
  );
};

export default Contacts;
