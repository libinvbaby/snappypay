import React, { Component } from "react";
// import Player from "./videobtn";
import { Link } from "react-router-dom";
import Service from './../../Pages/Service';
class CloudBanner extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };
  render() {
    return (
      <section className="software_banner_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="software_banner_content">
                <h2
                  className="f_500 f_size_50 w_color wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  providing a seamless{" "}
                  <span className="f_700">experience </span>
                  for your business transactions
                </h2>
                <p
                  className="w_color f_size_18 l_height30 mt_30 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  We are committed to providing a seamless experience for your
                  business transactions, and we look forward to working with you
                  to achieve your financial goals.
                </p>
                <div
                  className="action_btn d-flex align-items-center mt_40 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <Link className="software_banner_btn" to="./Service">Get Started</Link>
                  
                  {/* <div
                    className="video_btn popup-youtube"
                    onClick={this.onOpenModal}
                  >
                    <div className="icon">
                      <i className="ti-control-play"></i>
                    </div>
                    <span>Watch Video</span>
                  </div> */}
                  {/* <Player
                    open={this.state.open}
                    toggleModal={this.onOpenModal}
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="software_img wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <img
                  src={require("../../img/home4/Payment Information-bro.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CloudBanner;
