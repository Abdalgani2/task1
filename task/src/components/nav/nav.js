import React from "react";
import "./nav.css"
import location from "./location.png";
import fav from "./fav.png";
import cart from "./cart.png";
import person from "./person.png";
import more from "./more.png";
import mail from "./mail.png";
import {Button} from 'react-bootstrap';

 function MainNav() {
    return (
        <div className="mainDiv">
            <div className="leftDiv">
                <h1>GrabOne</h1>

            </div>
            <div className="rightDiv">
                <div id="rightDiv" className="location">
            <img className="icon"
                src={location}
              />
              <h4 className="icon">Auckland</h4>
              </div>
              <img id="hide" className="icon"
                src={fav}
              />
              <img id="hide" className="icon"
                src={cart}
              />
              <div id="hide" className="location">
            <img className="icon"
                src={person}
              />
              <img id="hide" className="icon"
                src={more}
              />
              </div>
              <div id="hide" className="location">
            <img className="icon"
                src={mail}
              />
              <h4 className="icon">subscribe</h4></div>
              

            </div>
        </div>
    );

}
export default MainNav
