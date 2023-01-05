import React, { Component } from "react";

class SecuirtyServiceItem extends Component {
  render() {
    let { image, rClass, Title, description, list } = this.props;
    return (
      <div
        className={`row h_analytices_features_item align-items-center ${rClass}`}
      >
        <div className="col-lg-6">
          <div className="h_security_img text-center">
            <img
              className="wow fadeInUp"
              width="100%"
              src={require("../../img/home4/" + image)}
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="h_analytices_content">
            <h2 className="wow fadeInUp" data-wow-delay="0.1s">
              {Title}
            </h2>
            <p className="wow fadeInUp text-justify" data-wow-delay="0.3s">
              {description}
            </p>
            <div>{list}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecuirtyServiceItem;
