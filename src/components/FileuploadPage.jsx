import React from "react";
import mark from "../assets/mark.png";
import check from "../assets/check (1).png";
import clock from "../assets/clock.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InputFileUpload from "./FileUpload";
import docx from "../assets/docx.png";
import CloseIcon from "@mui/icons-material/Close";
import save from "../assets/save.png";
import { useNavigate } from "react-router-dom";
export const FileuploadPage = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/questions");
  };
  return (
    <div className="fileUploadPage">
      <div className="fileuploadLeftPage">
        <p>Recent Stuides</p>
        <div className="study_div">
          <p className="study_div_p">"Dog Bite Complaint"</p>
          <div className="toastMessage">
            <p>2 days ago</p>
            <div className="toastMessage-success">
              <img src={check} alt="" />
              Completed
            </div>
          </div>
        </div>
        <div className="study_div">
          <p className="study_div_p">"Dog Bite Complaint"</p>
          <div className="toastMessage">
            <p>2 days ago</p>
            <div className="toastMessage-success">
              <img src={check} alt="" />
              Completed
            </div>
          </div>
        </div>
        <div className="study_div">
          <p className="study_div_p">"The data beach Delimma"</p>
          <div className="toastMessage">
            <p>2 days ago</p>
            <div className="toastMessage-progress">
              <img src={clock} alt="" />
              In progress
            </div>
          </div>
        </div>
        <div className="study_div">
          <p className="study_div_p">"Dog Bite Complaint"</p>
          <div className="toastMessage">
            <p>2 days ago</p>
            <div className="toastMessage-error">
              <img src={mark} alt="" />
              Completed
            </div>
          </div>
        </div>
      </div>
      <div className="fileuploadRightPage">
        <div className="rightPageHedding">
          <span>
            <MenuBookIcon />
          </span>
          <p>
            Get complete info about any case from AI-Driven research assistance
          </p>
        </div>
        <textarea
          className="textArea"
          placeholder="Ex: Land disputes,Mumbai,Recent judgements."
        />
        <div className="uploadFile">
          <InputFileUpload />
          <p>Click here to Upload file</p>
          <p>Maximum uploads :1 </p>
          <p className="fileTypes">File Formate : JPG,PNG,docx,pdf etc.</p>
        </div>
        <div>
          <p>Uploaded files </p>
          <div className="fileUploadDiv">
            <div>
              <img src={save} alt="" />
              <p>case document.pdf</p>
            </div>

            <CloseIcon />
          </div>
          <div className="fileUploadDiv">
            <div>
              <img src={save} alt="" />
              <p>case document.pdf</p>
            </div>

            <CloseIcon />
          </div>
          <div className="fileUploadDiv">
            <div>
              <img src={docx} alt="" />
              <p>case document.pdf</p>
            </div>

            <CloseIcon />
          </div>
        </div>
        <button className="gradient-button-next" onClick={() => handleChange()}>
          Next
        </button>
      </div>
    </div>
  );
};
