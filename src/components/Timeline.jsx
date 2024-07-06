import React from "react";
import "../App.css";
import record from "../assets/record.png";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export const Timeline = () => {
  return (
    <div>
      <div className="timelineDiv">
        <img src={record} alt="" />
        <p>Pre litigation</p>
      </div>
      <div className="chackpoint">
        <div className="contentDiv">
          <div>
            <TextSnippetIcon />
            <p>litigation</p>
          </div>
          <p>
            I am reseaching environmental regulations.Can you summarise the
            Clean Air Act and its objectives with details.
          </p>
        </div>
        <div className="contentDiv">
          <div>
            <TextSnippetIcon />
            <p>litigation</p>
          </div>
          <p>
            I am reseaching environmental regulations.Can you summarise the
            Clean Air Act and its objectives with details.
          </p>
        </div>
      </div>
      <div className="timelineDiv">
        <img src={record} alt="" />
        <p>Pre litigation</p>
      </div>
      <div className="chackpoint">
        <div className="contentDiv">
          <div>
            <TextSnippetIcon />
            <p>litigation</p>
          </div>
          <p>
            I am reseaching environmental regulations.Can you summarise the
            Clean Air Act and its objectives with details.
          </p>
        </div>
        <div className="contentDiv">
          <div>
            <TextSnippetIcon />
            <p>litigation</p>
          </div>
          <p>
            I am reseaching environmental regulations.Can you summarise the
            Clean Air Act and its objectives with details.
          </p>
        </div>
        <div className="contentDiv">
          <div>
            <TextSnippetIcon />
            <p>litigation</p>
          </div>
          <p>
            I am reseaching environmental regulations.Can you summarise the
            Clean Air Act and its objectives with details.
          </p>
        </div>
      </div>
      <div className="timelineDiv">
        <img src={record} alt="" />
        <p>Pre litigation</p>
      </div>
      <div className="chackpoint">
        <div className="contentDiv">
          <div>
            <TextSnippetIcon />
            <p>litigation</p>
          </div>
          <p>
            I am reseaching environmental regulations.Can you summarise the
            Clean Air Act and its objectives with details.
          </p>
        </div>
      </div>
    </div>
  );
};
