import React from "react";
import { Link } from 'react-router-dom'
import About from "../../Pages/About";

const CloudFeaturesTwo = () => {
  return (
    <section className="sec_pad mt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="software_featured_img wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <img
                className="img-fluid"
                src={require("../../img/home4/Online transactions-amico.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex align-items-center pl-0">
            <div className="software_featured_content">
              <h2
                className="f_700 f_size30 l_height_40 f_p mb-30 wow fadeInRight px-3 p-lg-0 p-md-0"
                data-wow-delay="0.2s"
              >
                About Us
              </h2>
              <p
                className=" f_400 mb_50 wow fadeInRight text-justify  px-3 p-lg-0 p-md-0"
                data-wow-delay="0.4s"
              >
                SnappyPay specializes in merchant services, technology
                solutions, online services, international trade and commerce.
                SnappyPay provides enabling tools to companies accessing global
                business opportunities. We are proud to be a trusted partner for
                businesses and brands, and we look forward to helping you
                achieve your financial goals. SnappyPay customer merchant base
                demands first-class payment solutions with features and
                capabilities to connect to different acquirers and Alternative
                Payment Models around the globe.
                <br></br>
                SnappyPay complies with all data privacy regulations. We take
                measures to protect your information and ensure your safety.
              </p>
            <div  className=" px-3 p-lg-0 p-md-0">

              <Link className="btn_hover btn_four wow fadeInRight"
                data-wow-delay="0.6s" to={"./About"}>
              Learn More
    </Link>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudFeaturesTwo;
