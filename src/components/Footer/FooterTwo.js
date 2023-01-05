import React, { Component } from "react";
import AboutWidget from "./FooterWidget/AboutWidget";
import SolutionWidget from "./FooterWidget/SolutionWidget";
import TeamWidget from "./FooterWidget/TeamWidget";
import Reveal from "react-reveal/Reveal";
class FooterTwo extends Component {
  render() {
    var { fClass } = this.props;
    let FooterData = this.props.FooterData;
    return (
      <footer className={`footer_area footer_area_four f_bg ${fClass}`}>
        <div className="footer_top">
          <div className="container">
            <div className="row">
              {FooterData.CompanyWidget.map((widget) => {
                return (
                  <Reveal effect="fadeInUp" key={widget.id}>
                    <div className="col-lg-4 col-md-6">
                      <div
                        className="f_widget company_widget wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        <a href="index.html" className="f-logo">
                          <img width="100%"
                            src={require("../../img/Snappypay-logo.png")}
                            alt=""
                          />
                        </a>
                        <div className="widget-wrap">
                          {/* <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span>Email:</span>{" "}
                            <a
                              href="mailto:"
                              className="f_400"
                            >
                              
                            </a>
                          </p>
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span>Phone:</span>{" "}
                            <a href="tel:948256347968" className="f_400">
                              +948 256 347 968
                            </a>
                          </p> */}
                          <p className="text-justify text-black">
                            SnappyPay specializes in merchant services,
                            technology solutions, online services, international
                            trade and commerce. SnappyPay provides enabling
                            tools to companies accessing global business
                            opportunities
                          </p>
                        </div>
                        {/* <form
                          action="#"
                          className="f_subscribe mailchimp"
                          method="post"
                        >
                          <input
                            type="text"
                            name="EMAIL"
                            className="form-control memail"
                            placeholder="Email"
                          />
                          <button className="btn btn-submit" type="submit">
                            <i className="ti-arrow-right"></i>
                          </button>
                        </form> */}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
              <AboutWidget ftitle="About Us" FooterData={FooterData} />
              {/* <SolutionWidget
                ftitle="Workflow Solutions"
                FooterData={FooterData}
              />
              <TeamWidget ftitle="Team Solutions" FooterData={FooterData} /> */}
              <div className="col-lg-4">
                <div className="widget-wrap">
                  
                  <div className="contact_info_item">
                    <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                      Office Address
                    </h6>
                    <p className="f_400 f_size_15">
                    SnappyPay LLC<br />
328 S Main Street<br/>
Richford, VT 05476

                    </p>
                  </div>
                  <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Email
                </h6>
               
                  <p className="f_400 f_p f_size_15 mb-0 l_height34">
                    <span>Customer Support:</span>{" "}
                    <a href="mailto:Helpdesk@SnappyPay.com" className="f_400">
                    Helpdesk@SnappyPay.com
                    </a>
                  </p>
                  <p className="f_400 f_p f_size_15 mb-0 l_height34">
                    <span>General Inquiries:</span>{" "}
                    <a href="mailto: Info@SnappyPay.com" className="f_400">
                    Info@SnappyPay.com
                    </a>
                  </p>
                  <p className="f_400 f_p f_size_15 mb-0 l_height34">
                    <span>Sales:</span>{" "}
                    <a href="mailto:Sales@SnappyPay.com" className="f_400">
                    Sales@SnappyPay.com
                    </a>
                  </p>
                  {/* <p className="f_400 f_p f_size_15 mb-0 l_height34">
                    <span>Phone:</span>{" "}
                    <a href="tel:948256347968" className="f_400">
                      +948 256 347 968
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-6">
                <p className="mb-0 f_400">{FooterData.copywrite}</p>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-6">
                <div className="f_social_icon_two text-center">
                  {FooterData.socialIcon.map((item) => {
                    return (
                      <a href="/" key={item.id}>
                        <i className={item.icon}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="list-unstyled f_menu text-right">
                  <li>
                    <a href=".#">Terms of Use</a>
                  </li>
                  <li>
                    <a href=".#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterTwo;
