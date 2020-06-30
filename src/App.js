import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navi from "./Components/Navi";
import SearchSR from "./Components/SearchSR";
import CustomerDetails from "./Components/CustomerDetails";
import "./App.css";
import logo from "./logo.png";
import profileImage from "./profile.jpg";
import ComingSoon from "./Components/ComingSoon";
import serviceRequest from "./Components/serviceRequest";
import documentPdf from "./Components/Address_Change_Document.pdf";



function App() {
	function onClickLogout() {
					window.location.href = "http://www.google.com";
	}
    return (
        <Router>
            <div className="App">
                <div className="Header">
                    <div className="box">
                        <div className="imageHeader">
                            <img src={logo} className="AppLogo" />
                            <div className="profile-details">
                                <div className="profile-side-one">
                                    <img src={profileImage} className="profile-image" />
                                </div>
                                <div className="profile-side-two">
                                    <h4>Rajat Mehta</h4>
                                </div>
                                <input type="submit" value="Logout" className="form-logout-button" onClick={onClickLogout}	 />
                            </div>
                            <div className="navigation">
                                <div>
                                    <h4 className="navigation-title">Start a service</h4>
                                    <Navi></Navi>
                                </div>
                            </div>
                        </div>
                        <div className="Middle">
                            <div className="Title">
                                <h1 className="h1-style">Product Details</h1>
                            </div>
                            <div className="MainBody">
                                <Route path="/" exact component={SearchSR} />
                                <Route path="/customerdetails/:productCode" exact component={CustomerDetails} />
                                <Route path="/comingsoon" exact component={ComingSoon} />
                                {/* <Route path = '/pdf' exact component={documentPdf} /> */}
                                <Route path="/servicerequest" exact component={serviceRequest} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}
const Home = () => (
    <div>
        <h2>Please select a service from side navigation</h2>
    </div>
);
const thankyou = () => (
    <div>
        <h2>
            Service Completed
            <br />
            Please select a service from side navigation
        </h2>
    </div>
);
export default App;
