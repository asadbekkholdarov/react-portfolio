import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useContext, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tt94ym6",
        "template_8k994dq",
        formRef.current,
        "user_LGFWtxXGSYcX6h1lDXQlF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} className="c-icon" alt="" />
              +998 71 207 9006
            </div>
            <div className="c-info-item">
              <img src={Email} className="c-icon" alt="" />
              info@amity.uz
            </div>
            <div className="c-info-item">
              <img src={Address} className="c-icon" alt="" />
              Labzak 70, Tashkent
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story</b> Get in touch Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} action="">
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea name="message" id="" cols="" rows="4"></textarea>
            <button>Submit</button>
            {done && "Thank you messaging...!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
