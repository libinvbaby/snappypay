import React from "react";
import Sectitle from "../Title/Sectitle";
import ErpServiceitem from "./ErpServiceitem";

const ErpService = () => {
  return (
    <section className="erp_service_area sec_pad">
      <div className="container">
        <Sectitle
          sClass="hosting_title erp_title text-center"
          Title="Our Services"
          TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!"
        />
        <div className="row">
          <ErpServiceitem
            itemClass="pr_70"
            sTitle="Digital Payment Solution "
            pText="The use of digital payments is becoming increasingly prevalent in the financial world"
            icon="erp_icon1.png"
          />
          <ErpServiceitem
            itemClass="pr_70 pl_10"
            sTitle="Financial Management "
            pText="At SnappyPay, we specialize in facilitating a wide financial transaction range, including local and digital payments"
            icon="erp_icon2.png"
          />
          <ErpServiceitem
            itemClass="pl_70"
            sTitle="Marketplace "
            pText="We created SnappyPay to help businesses stay ahead of the competition in the marketplace"
            icon="erp_icon3.png"
          />
          <ErpServiceitem
            itemClass="pr_70"
            sTitle="Online Gaming "
            pText="SnappyPay is a financial platform designed to support online gaming services. "
            icon="erp_icon4.png"
          />
          <ErpServiceitem
            itemClass="pl_10"
            sTitle="Online Retail"
            pText="We have developed a solution that offers a seamless, localized checkout experience for your online store"
            icon="erp_icon5.png"
          />
          <ErpServiceitem
            itemClass="pl_70"
            sTitle="Platform Integrations "
            pText="Simplifying the process of integrating multiple payment platforms is also something we keep at the top of our minds"
            icon="erp_icon6.png"
          />
          <ErpServiceitem
            itemClass="pl_70"
            sTitle="Social Gaming  "
            pText="SnappyPay offers a best-in-class experience for social gaming and e-commerce industries. 

            "
            icon="erp_icon6.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ErpService;
