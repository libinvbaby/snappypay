import React, { Component } from "react";

class HostingFeaturesItem extends Component {
  render() {
    let {
      rowClass,
      mvpClass,
      hImage,
      hTitle,
      hPragraph,
      icon,
      icon2,
      text,
      text2,
      tdescription,
      tdescription2,
    } = this.props;
    return (
      <div className={`row ${rowClass}`}>
        <div className="col-lg-6 ">
          <div className="h_features_img ">
            <div className={`${mvpClass}`}>
              <img
                className={`${mvpClass}`}
                width="100%"
                src={require("../../img/home4/" + hImage)}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 pt-lg-5">
          <div className="h_features_content">
            <div className="  hosting_title">
              <h2 className="w_color ">{hTitle}</h2>
              <p className="w_color pt-lg-5">{hPragraph}</p>
            </div>
            {/* <div className="media h_features_item">
                            <img src={require ("../../img/hosting/" + icon)} alt=""/>
                            <div className="media-body">
                                <h4 className="h_head">{text}</h4>
                                <p>{tdescription}</p>
                            </div>
                        </div>
                        <div className="media h_features_item">
                            <img src={require ("../../img/hosting/" + icon2)} alt=""/>
                            <div className="media-body">
                                <h4 className="h_head">{text2}</h4>
                                <p>{tdescription2}</p>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HostingFeaturesItem;
