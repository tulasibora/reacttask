import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import check from "../assets/check (1).png";
import { Timeline } from "./Timeline";
import { TimelineTwo } from "./TimelineTwo";

export const CaseFlowPage = () => {
  const navigate = useNavigate();
  const hadleClickBack = () => {
    navigate("/questions");
  };
  return (
    <div>
      <div className="fileUploadPage">
        <div className="CaseFlowPageLeft">
          <div>
            <div className="backNavigateDiv">
              <ChevronLeftIcon />
              <button
                className="gradient-button-back"
                onClick={() => hadleClickBack()}
              >
                Go Previous Page
              </button>
            </div>
            <p id="giveninfo">Given information</p>
            <hr />
            <p id="textEnterd">Text Entered</p>
            <p id="content">
              I am reseaching environmental regulations.Can you summarise the
              Clean Air Act and its objectives with details.
            </p>
            <hr />
            <p>Recents</p>
            <div className="study_div_flow">
              <div className="toastMessage_caseflow">
                <p id="ParaIncaseflow">DEEDS</p>
                <div className="toastMessage-success">
                  <img src={check} alt="" />
                  Completed
                </div>
              </div>
              <p className="studyCaseFlow">"Dog Bite Complaint"</p>
              <p id="ParaIncaseflow"> 2 min ago</p>
            </div>
            <div className="study_div_flow">
              <div className="toastMessage_caseflow">
                <p id="ParaIncaseflow">DEEDS</p>
                <div className="toastMessage-success">
                  <img src={check} alt="" />
                  Completed
                </div>
              </div>
              <p className="studyCaseFlow">"The data Beach Delimma"</p>
              <p id="ParaIncaseflow"> 2 min ago</p>
            </div>
            <div className="study_div_flow">
              <div className="toastMessage_caseflow">
                <p id="ParaIncaseflow">DEEDS</p>
                <div className="toastMessage-success">
                  <img src={check} alt="" />
                  Completed
                </div>
              </div>
              <p className="studyCaseFlow">"Dog Bite Complaint"</p>
              <p id="ParaIncaseflow"> 2 min ago</p>
            </div>
          </div>
        </div>
        <div className="CaseFlowPageMiddle">
          <p id="caseFlowHedd">Case flow</p>
          <p id="selectDraft">Select the document for drafting</p>
          <Timeline />
        </div>
        <div className="CaseFlowPageRight">
          <TimelineTwo />
        </div>
      </div>
    </div>
  );
};
