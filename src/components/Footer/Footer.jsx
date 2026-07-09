import React from "react";
import "./Footer.css";
import FooterLinks from "../FooterLinks/FooterLinks";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-component">
          <div className="upper-footer">
            <div className="left-upper">
              <h1>Trippy</h1>
              <h5>Choose Your Fvourite Destination.</h5>
            </div>
            <div className="right-upper">
           <a href="">   <i className="fab fa-facebook"></i></a>
             <a href=""> <i className="fab fa-instagram"></i> </a>
              <a href=""><i className="fa-brands fa-x-twitter"></i></a>
              <a href=""><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="footer-links" >
          <FooterLinks
          h3="Project"
          p1="ChangeLog"
          p2="Status"
          p3="License"
          p4="All versions"
          />

          <FooterLinks
          h3="Community"
          p1="Github"
          p2="Issues"
          p3="Project"
          p4="Twitter"
          />
          <FooterLinks
          h3="Help"
          p1="Support"
          p2="Troubleshooting"
          p3="Contact Us"
          />
           <FooterLinks
          h3="Others"
          p1="Terms of service"
          p2="Privacy policy"
          p3="Licence"
          />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
