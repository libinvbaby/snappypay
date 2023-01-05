import React from "react";
import HostingFeaturesItem from "./HostingFeaturesItem";

const HostingFeaturesTwo = () => {
  return (
    <section className="  hosting_features_area">
      <div className="container">
        <HostingFeaturesItem
          rowClass="flex-row-reverse"
          hImage="graph-new-white.png"
          // hTitle="Solutions for Your small business"
          hPragraph="Our experts worked tirelessly to provide a versatile platform with a wide range of products. We are confident that our clients will find SnappyPay to be an invaluable resource in their business endeavours. By offering a transparent, flexible, and swift process, we aim to provide a superior alternative to other commercial solutions in the market."
          icon="icon9.png"
          icon2="icon10.png"
          text="Reseller Hosting"
          text2="Wordpress Hosting"
          tdescription="Hunky dory barney fanny around up the duff no biggie."
          tdescription2="Hunky dory barney fanny around up the duff no biggie."
        />
      </div>
    </section>
  );
};

export default HostingFeaturesTwo;
