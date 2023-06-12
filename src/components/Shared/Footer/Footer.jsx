import React from "react";
import logo from "../../../../public/logo1.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content mt-8 shadow-md">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clip-rule="evenodd"
            className="fill-current"
          ></svg>
          <img
            src={logo}
            alt="logo"
            width="70"
            height="70"
            className="fill-current"
          />
          <p>
            SummerSportsHub
            <br />
          summer sports camp  1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Sports</a>
          <a className="link link-hover">summer camp</a>
          <a className="link link-hover">Teach sports</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
