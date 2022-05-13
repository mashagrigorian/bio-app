import React, { useState } from "react";
import { send } from "emailjs-com";
import SocialFollow from "../../SocialFollow";
import ContactInfo from "../../ContactInfo";

const Contacts = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

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
    send(
      "service_noipr0n",
      "template_m5sgrtc",
      { senderName, senderEmail, message },
      "user_nkkLtA7GvAAfB3FQb"
    )
      .then((response) => {
        console.log("Message sent", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
  };

  return (
    <>
      <form onSubmit={sendMail}>
        <input
          type="text"
          name="sender-name"
          value={senderName}
          onChange={handleName}
          required
          placeholder="Your name"
        />
        <input
          type="email"
          name="sender-email"
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

// const state = {
//   file: null,
// };

// const handleFile = (e) => {
//   let file = e.target.files;

// };
// return (
//   <div>
//     <form>
//       <div class="form-group">
//         <label for="name">Name</label>
//         <input
//           type="name"
//           name="name"
//           class="form-control"
//           id="name"
//           placeholder="enter your name"
//         />
//       </div>
//       <div class="form-group">
//         <label for="email">Email address</label>
//         <input
//           type="email"
//           name="email"
//           class="form-control"
//           id="email"
//           placeholder="enter your email"
//         />
//       </div>
//       <div class="form-group">
//         <label for="subject">Subject</label>
//         <input
//           type="text"
//           name="subject"
//           class="form-control"
//           id="subject"
//           placeholder="enter email subject"
//         />
//       </div>

//       <div class="form-group">
//         <label for="email_body">Message</label>
//         <textarea class="form-control" id="email_body" rows="5"></textarea>
//       </div>
/* <div className="upload-file">
          <form>
            <div className="">
              <label>Select File</label>
              <input
                type="file"
                name="file"
                onChange={(e) => this.handleFile(e)}
              />
            </div>
            <br />
            <button>Upload</button>
          </form>
        </div> */

//   <button type="submit" class="btn btn-primary">
//     Submit
//   </button>
// </form>

//     </div>
//   );
// };
