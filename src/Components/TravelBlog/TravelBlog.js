import React from "react";
import "./travelblog.css";

function TravelBlog(props) {
  return (
    <div className="place-card">
      <div className="card-heading">
        <h3>{props.placeHeading}</h3>
      </div>
      <div className="card-images">
        <div className="card-img">
          <img src={props.placeImg1} />
        </div>
        <div className="card-img">
          <img src={props.placeImg2} />
        </div>
        <div className="card-img">
          <img src={props.placeImg3} />
        </div>
      </div>
      <div className="card-desc">
        <span>{props.placeDescription}</span>
      </div>
    </div>
  );
}

export default TravelBlog;
