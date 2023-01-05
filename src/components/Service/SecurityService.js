import React, { Component } from "react";
import SecurityServiceItem from "./SecuirtyServiceItem";

class SecurityService extends Component {
  render() {
    return (
      <section className="h_security_about_area">
        <div className="container">
          <SecurityServiceItem
            image="integration.png"
            description="SnappyPay is a Secure eCommerce and holistic multisided transactional platform that combines a powerful payments gateway, sophisticated real-time fraud prevention capabilities and advanced business intelligence tools. It provides access to an extensive global payments network with the confidence that you, your customers, and your transactions stand protected against fraud."
          />
          <SecurityServiceItem
            image="global.png"
            rClass="flex-row-reverse "
            Title="SIMPLIFYING THE PAYMENT TECHNOLOGY "
            description="We designed SnappyPay to help merchants achieve financial transactions independence by streamlining their trades and making them as secure as possible. We understand the importance of having reliable, efficient tools to manage your business transactions, and we are committed to providing solutions that help you succeed. Whether you are just starting or have been in the business world for years, we are here to support you every step of the way.

            "
            list={
              <ul className="list-unstyled" role="list">
                <li className="wow fadeInUp" data-wow-delay="0.5s">
                  <span>
                    <i class="ti-angle-double-right"></i>Unlimited Acquirer
                    Connections
                  </span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.7s">
                  <span>
                    <i class="ti-angle-double-right"></i>
                    Unlimited global branded wallets / mobile pay connections{" "}
                  </span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.9s">
                  <span>
                    <i class="ti-angle-double-right"></i> Unlimited Local
                    Wallets in the platform network
                  </span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.9s">
                  <span>
                    <i class="ti-angle-double-right"></i>
                    3D Secure Advanced (includes exemption processing)
                  </span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.9s">
                  <span>
                    <i class="ti-angle-double-right"></i> Integration of new
                    Local Wallets - 5
                  </span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.9s">
                  <span>
                    <i class="ti-angle-double-right"></i>
                    Tokenization Premium - Enabling One-Click and Recurring
                    Payments (SnappyPay, Issuer, Acquirer & Scheme/ Network
                    Tokens)
                  </span>
                </li>
              </ul>
            }
          />
        </div>
      </section>
    );
  }
}

export default SecurityService;
