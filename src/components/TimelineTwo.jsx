import React from "react";
import record from "../assets/check (2).png";

export const TimelineTwo = () => {
  return (
    <div>
      <div>
        <div className="timelineDiv">
          <img src={record} alt="" />
          <p style={{ color: "#025BD4" }}>Start</p>
        </div>
        <div className="chackpointBlue">
          <div className="chackpointForTimeline"></div>
        </div>
      </div>
      <div>
        <div className="timelineDiv">
          <img src={record} alt="" />
          <p style={{ color: "#025BD4" }}>Continue</p>
        </div>
        <div className="chackpointBlue">
          <div className="chackpointForTimeline"></div>
        </div>
      </div>
      <div>
        <div className="timelineDiv">
          <img src={record} alt="" />
          <p style={{ color: "#025BD4" }}>Analysis</p>
        </div>
        <div className="chackpointBlue">
          <div className="chackpointForTimeline"></div>
        </div>
      </div>
      <div>
        <div className="timelineDiv">
          <img src={record} alt="" />
          <p style={{ color: "#025BD4" }}>Done</p>
        </div>
      </div>
    </div>
  );
};
