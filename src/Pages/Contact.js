import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Contacts from "../components/Contacts";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";

const About = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu"
        hbtnClass="btn_get_radious menu_custfive"
      />{" "}
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Contact Us"
        Pdescription="SnappyPay is committed to providing the best possible support for our clients. If you have any questions or concerns, please don't hesitate to contact us. Our team is here to assist and answer any queries. We are committed to helping you achieve your financial goals."
      />
      <Contacts />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default About;
