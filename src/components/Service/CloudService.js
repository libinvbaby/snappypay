import React, { Component } from "react";
import CloudServiceItem from "./CloudServiceItem";

class CloudService extends Component {
  render() {
    return (
      <section className="software_featured_area">
        <div className="container">
          <h2
            className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            Our Services
          </h2>
          <div className="row software_featured_info">
            <CloudServiceItem
              icon="icon1.png"
              sTitle="Digital Payment Solution "
              Sp="The use of digital payments is becoming increasingly prevalent in the financial world, and SnappyPay is committed to providing services "
              sbtn="Learn More"
            />
            <CloudServiceItem
              icon="icon2.png"
              sTitle="Financial Management "
              Sp="At SnappyPay, we specialize in facilitating a wide financial transaction range, including local and digital payments. "
              sbtn="Learn More"
            />
            <CloudServiceItem
              icon="icon3.png"
              sTitle="Marketplace "
              Sp="We created SnappyPay to help businesses stay ahead of the competition in the marketplace. With SnappyPay, you can take advantage"
              sbtn="Learn More"
            />
            <CloudServiceItem
              icon="icon3.png"
              sTitle="Online Gaming  "
              Sp="SnappyPay is a financial platform designed to support online gaming services. We developed a solution that offers flexibility and ease"
              sbtn="Learn More"
            />
            <CloudServiceItem
              icon="icon3.png"
              sTitle="Online Retail"
              Sp="We have developed a solution that offers a seamless, localized checkout experience for your online store, allowing you to easily accept "
              sbtn="Learn More"
            />
            <CloudServiceItem
              icon="icon3.png"
              sTitle="Platform Integrations  "
              Sp="Simplifying the process of integrating multiple payment platforms is also something we keep at the top of our minds. "
              sbtn="Learn More"
            />
            <CloudServiceItem
              icon="icon3.png"
              sTitle="Social Gaming   "
              Sp="SnappyPay offers a best-in-class experience for social gaming and e-commerce industries. 

              We provide transparent rates and a range of features to support your financial needs "
              sbtn="Learn More"
            />
          </div>
        </div>
      </section>
    );
  }
}
export default CloudService;
