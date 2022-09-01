import React from "react";
import "./Items.css"

function Items() {
    return (
        <>
        <div className="mainDivItems">
        
            <div
              className="itemCard"
            >
              <div className="img">
                <img className="imgCard" src="https://main-cdn.grabone.co.nz/goimage/fullsize/a24c78ab62c3fdd83fd583cd4816c713465d8cc4.jpg"></img>
              </div>
              <div>
                <p className="title">wo-Person Boutique Dining & Movie Package </p>
                <p className="info"> Monterey Cinemas Takapuna</p>
                <p className="info">price:30$</p>
              </div>
            </div>
            <div
              className="itemCard"
            >
              <div className="img">
                <img className="imgCard" src="https://main-cdn.grabone.co.nz/goimage/fullsize/d27e2affc803133ca35c274ceb863f6f3877e43b.png"></img>
              </div>
              <div>
                <p className="title">Premium Game Wild Venison 9kg Box</p>
                <p className="info">Premium Game </p>
                <p className="info">price:210$</p>
              </div>
            </div>
            <div
              className="itemCard"
            >
              <div className="img">
                <img className="imgCard" src="https://main-cdn.grabone.co.nz/goimage/fullsize/d27e2affc803133ca35c274ceb863f6f3877e43b.png"></img>
              </div>
              <div>
                <p className="title">Premium Game Wild Venison 9kg Box</p>
                <p className="info">Premium Game </p>
                <p className="info">price:210$</p>
              </div>
            </div>
            <div
              className="itemCard"
            >
              <div className="img">
                <img className="imgCard" src="https://main-cdn.grabone.co.nz/goimage/fullsize/08f4386f230e9455f20a75886746f101c809479d.jpg"></img>
              </div>
              <div>
                <p className="title">Per-Person, Twin-Share Seven-Day Tour  </p>
                <p className="info">Halong Tours Booking - Vietnam </p>
                <p className="info">price:590$</p>
              </div>
            </div>
      </div>
      </>
    );
}

export default Items