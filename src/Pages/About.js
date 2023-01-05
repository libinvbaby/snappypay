import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Sservice from "../components/Service/Sservice/Sservice";
import AgencyAbout from "../components/About/AgencyAbout";
import Partner from "../components/Partner";
import FooterTwo from "../components/Footer/FooterTwo";
import ServiceData from "../components/Service/ServiceData";
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
        Ptitle="About Us"
        Pdescription=""
      />
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">
            <p className="pt-lg-5 mt-lg-5 text-justify">
              SnappyPay specializes in merchant services, technology solutions,
              online services, international trade and commerce. SnappyPay
              provides enabling tools to companies accessing global business
              opportunities. We are proud to be a trusted partner for businesses
              and brands, and we look forward to helping you achieve your
              financial goals. SnappyPay customer merchant base demands
              first-class payment solutions with features and capabilities to
              connect to different acquirers and Alternative Payment Models
              around the globe.{" "}
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              width="80%"
              src={require("../../src/img/home4/QR Code-pana.png")}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-12 text-justify">
          <p><i class="fa-regular fa-circle-check"></i> SnappyPay senior digital platform and cybersecurity experts have over 100's years of combined practice.</p>
          <p><i class="fa-regular fa-circle-check"></i>	SnappyPay is a collection of Gartner top quadrant technologies integrated into a digital platform. </p>
          <p><i class="fa-regular fa-circle-check"></i> SnappyPay enables merchants to pick a plan that suits their payment solutions, risk profile, budget, and requirements in a modular service solution.</p>
          <p><i class="fa-regular fa-circle-check"></i>SnappyPay Whitelabel Secure eCommerce is a holistic platform that combines a powerful payments gateway, sophisticated real-time fraud prevention capabilities and advanced business intelligence tools. It provides access to an extensive global payments network with confidence to protect our customers and their transactions against fraud. Fully PCI-DSS level 1 compliant, with the capability for automated onboarding and advanced business intelligence tools. </p>
          <p><i class="fa-regular fa-circle-check"></i> SnappyPay leverages its Business Intelligent Platform for data analysis and reporting. Making data a fundamental pillar to control risk and enable our merchants to achieve their business strategy. Our platform is a powerful tool for:
          <ul>
            <li className="about-list">	Payment Processing</li>
            <li className="about-list">	Merchant Fraud Management</li>
            <li className="about-list">	Integration Interfaces</li>
            <li className="about-list"> Configuration</li>
            <li className="about-list">	Analysis</li>
            <li className="about-list"> Monitoring</li>
            </ul></p>
         
        </div>
      </div>
      {/* <Sservice /> */}
      {/* <AgencyAbout ServiceData={ServiceData} /> */}
      {/* <Partner pClass="partner_logo_area_five bg_color" /> */}
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default About;
