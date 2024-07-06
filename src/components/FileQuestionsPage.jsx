import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import save from "../assets/save.png";
import { useNavigate } from "react-router-dom";
const dogBiteQA = [
  {
    question: "1.What should I do immediately after a dog bite?",
    answer:
      "You should clean the wound with soap and water, apply an antibiotic ointment, and cover it with a clean bandage. Seek medical attention to assess the risk of infection or rabies.",
  },
  {
    question: "2.How do I file a dog bite complaint?",
    answer:
      "Contact your local animal control agency or police department to report the incident. Provide details about the dog, the owner (if known), and the circumstances of the bite.",
  },
  {
    question: "3.Can I take legal action after a dog bite?",
    answer:
      "Contact your local animal control agency or police department to report the incident. Provide details about the dog, the owner (if known), and the circumstances of the bite.",
  },
  {
    question: "4.Can I take legal action after a dog bite?",
    answer:
      "Contact your local animal control agency or police department to report the incident. Provide details about the dog, the owner (if known), and the circumstances of the bite.",
  },
  {
    question: "5.Can I take legal action after a dog bite?",
    answer:
      "Contact your local animal control agency or police department to report the incident. Provide details about the dog, the owner (if known), and the circumstances of the bite.",
  },
];

export const FileQuestionsPage = () => {
  const navigate = useNavigate();
  const hadleClickBack = () => {
    navigate("/");
  };
  const hadleclickNextBtn = () => {
    navigate("/caseflow");
  };
  return (
    <div className="fileUploadPage">
      <div className="FileQuestionsPageLeft">
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
          <p>Uploads</p>

          <div className="uploadedFile">
            <p>Uploaded file</p>
            <div className="fileUploadDivQus">
              <img src={save} alt="" />
              <p>Case document.pdf</p>
            </div>
            <div className="fileUploadDivQus">
              <img src={save} alt="" />
              <p>Case document.pdf</p>
            </div>
            <div className="fileUploadDivQus">
              <img src={save} alt="" />
              <p>Case document.pdf</p>
            </div>
            <div className="fileUploadDivQus">
              <img src={save} alt="" />
              <p>Case document.pdf</p>
            </div>
            <div className="fileUploadDivQus">
              <img src={save} alt="" />
              <p>Case document.pdf</p>
            </div>
          </div>
        </div>
      </div>
      <div className="FileQuestionsPageRight">
        <div className="subHeddingsBtn">
          <button className="subBtn">Case Desc</button>
          <button className="subBtn">Acts & Laws</button>
          <button className="subBtn">Judgements</button>
          <button className="subBtn">Templates </button>
          <button className="subBtn_qus">Questions </button>
          <button className="subBtn">Support </button>
        </div>
        <div>
          <p id="ques">Questions</p>
          <div className="btnsInquestions">
            <button className="gradient-button-home">By petitionar</button>
            <button className="gradient-button-res">By respondant</button>
          </div>

          {dogBiteQA.map((question) => {
            return (
              <div className="queNans">
                <p id="questions">{question.question}</p>
                <p id="reason">reason</p>
                <p id="answers">{question.answer}</p>
                <hr />
              </div>
            );
          })}
        </div>
        <button
          className="gradient-button-next"
          onClick={() => hadleclickNextBtn()}
        >
          {" "}
          next
        </button>
      </div>
    </div>
  );
};
