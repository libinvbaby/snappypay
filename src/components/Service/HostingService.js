import React from "react";
import Sectitle from "../Title/Sectitle";
import HRServiceItems from "./HostingServiceitem";
import HRServiceItemsrowtwo from "./HostingServviceitemrowtow";

const HostingService = () => {
  return (
    <section className="hosting_service_area sec_pad">
      <div className="container">
        <Sectitle
          sClass="hosting_title text-center"
          Title="Our Services
          "
          TitleP=""
        />
        <div className="row">
          <HRServiceItems
            hostingicon="secure-payment.png"
            hostingserviceTitle="Digital Payment Solution
            "
            hostingservicedescription="The use of digital payments is becoming increasingly prevalent in the financial world, and SnappyPay is committed to providing services"
          />
          <HRServiceItems
            hostingicon="planning.png"
            hostingserviceTitle="Financial Management"
            hostingservicedescription="At SnappyPay, we specialize in facilitating a wide financial transaction range, including local and digital payments.     "
          />
          <HRServiceItems
            hostingicon="online-shopping.png"
            hostingserviceTitle="Marketplace
            "
            hostingservicedescription="We created SnappyPay to help businesses stay ahead of the competition in the marketplace. With SnappyPay, you can take advantage"
          />
          <HRServiceItems
            hostingicon="youtube-gaming.png"
            hostingserviceTitle="Online Gaming
            "
            hostingservicedescription="SnappyPay is a financial platform designed to support online gaming services. We developed a solution that offers flexibility and ease

"
          />
          <HRServiceItemsrowtwo
            hostingicon="storefront.png"
            hostingserviceTitle="Online Retail

            "
            hostingservicedescription="We have developed a solution that offers a seamless, localized checkout experience for your online store, allowing you to easily accept      "
          />
          <HRServiceItemsrowtwo
            hostingicon="education.png"
            hostingserviceTitle="Platform Integrations
            "
            hostingservicedescription="Simplifying the process of integrating multiple payment platforms is also something we keep at the top of our minds.

            "
          />
          <HRServiceItemsrowtwo
            hostingicon="gaming.png"
            hostingserviceTitle="Social Gaming

            "
            hostingservicedescription="SnappyPay offers a best-in-class experience for social gaming and e-commerce industries. We provide transparent rates 



            "
          />
        </div>
      </div>
    </section>
  );
};
export default HostingService;
