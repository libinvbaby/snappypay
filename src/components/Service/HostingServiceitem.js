import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Service from '../../Pages/Service'


class HRServiceItems extends Component {
  render() {
    var { hostingserviceTitle, hostingservicedescription, hostingicon } =
      this.props;
    return (
      <div className="col-lg-3 col-sm-6">
        <Link to={"./Service"}>
           
    
        <div className="hosting_service_item ">
       
          <div className="icon">
            <img
              width="50px"
              src={require("../../img/hosting/" + hostingicon)}
              alt=""
            />
          </div>
          <a href="/#">
            <h4 className="h_head"> 
            {hostingserviceTitle}
</h4>
          </a>
          <p className="text-justify">{hostingservicedescription}</p>
        </div>
        </Link>
      </div>
    );
  }
}
export default HRServiceItems;
