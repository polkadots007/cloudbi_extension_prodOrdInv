import React from "react";
import './HomePage.css'

const HomePage = ({ extensionSDK, host, extensionID}: any) => {

  const overviewUrl = host + '/extensions/'+ extensionID + '/overview';

  const handleClick = () => {
      extensionSDK.openBrowserWindow(overviewUrl, '_parent');
  }

    return (
      <div className='home-page'>
        <div className="content-left">
        <div className="heading">
          Inventory Analysis
        </div>
        <div className="btn-explore" onClick={handleClick}>
          <span className='btn-text'>Explore</span>
        </div>
        </div>
        <div className="content-right">
          
        </div>
      </div>
      )

}

export default HomePage;