import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import CloudBanner from "../components/Banner/CloudBanner";
import CloudFeaturesTwo from "../components/Features/CloudFeaturesTwo";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import HostingFeatures from "../components/Service/HostingFeatures";
import HostingFeaturesTwo from "../components/Service/HostingFeaturesTwo";
import SecurityService from "./../components/Service/SecurityService";
import HostingService from "../components/Service/HostingService";

const HomeCloud = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu"
        hbtnClass="btn_get_radious menu_custfive"
      />
      <CloudBanner />
      <CloudFeaturesTwo />
      <div className="software_featured_area_two">

      <HostingFeatures />
      <HostingFeaturesTwo />
      </div>
      <HostingService />

      <SecurityService />

      {/* <CloudFeatures /> */}
      {/* <CloudServiceTab /> */}
      {/* <DeveloperTab /> */}
      {/* <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0" /> */}
      {/* <ServiceSubscribe /> */}
      <FooterTwo fClass="pt_20" FooterData={FooterData} />
    </div>
  );
};
export default HomeCloud;
