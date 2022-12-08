import React from "react";
import BoxIcon from "../../images/Box";
import TruckIcon from "../../images/Truck";
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
          POI Analysis
        </div>
        <div className="btn-icon">
        <div className="btn-explore" onClick={handleClick}>
          <span className='btn-text'>Explore</span>
        </div>
        <div className='icon-truck'><TruckIcon /></div>
        </div>
        <div className="text">
          <span className="text-header">Mission</span>
          <span className="text-para">To Establish a relationship between Order level details up to the Brand integrity and its respective Inventory Data</span>
          <span className="text2-header">Dashboards</span>
          <span className="text2-list">
            <ul>
              <li>Overview</li>
              <li>Category Analysis</li>
            </ul>
          </span>
        </div>
        </div>
        <div className="content-right">
        <span className='icon-box'><BoxIcon /></span>
        </div>
      </div>
      )

}

export default HomePage;