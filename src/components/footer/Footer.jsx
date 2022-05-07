import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./footer.css";

const Footer = () => (
  <div className="app__footer" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-text">Կապ մեզ հետ</h1>
        <div className="icon">
          <i className="fa fa-location-dot"></i>
          <label htmlFor=""> Արմենակյան 129, Երևան</label>
        </div>
        <div className="icon">
          <i className="fa fa-phone"></i>
          <label htmlFor=""> +374 10 651-631</label>
        </div>
        <div className="icon">
          <i className="fa fa-envelope"></i>
          <label htmlFor="/"> info@cep.am antifraud@epiu.am</label>
        </div>
      </div>
      <div className="app__footer-links_logo">
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      {/* <div className="app__footer-links_work">
        <h2>Արագ հղումներ</h2>
        <ul>
          <li>
            <Link to={"/"}>Մեր մասին</Link>
          </li>
          <li>
            <Link to={"/partners"}>Մեր գործընկերները</Link>
          </li>
          <li>
            <Link to={"/achievements"}>Մեր ձեռքբերումները</Link>
          </li>
          <li>
            <Link to={"/projects"}>Ծրագրեր</Link>
          </li>
          <li>
            <Link to={"/results"}>Արդյունքներ</Link>
          </li>
          <li>
            <Link to={"/custom"}>Գնումներ</Link>
          </li>
          <li>
            <Link to={"/news"}>Նորություններ</Link>
          </li>
          <li>
            <Link to={"/contact"}>Կապ</Link>
          </li>
        </ul>
      </div> */}
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        Հեղինակային իրավունք @2022 Բոլոր իրավունքները պաշտպանված են:
      </p>
    </div>
  </div>
);

export default Footer;
