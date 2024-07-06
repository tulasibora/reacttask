import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import save from "../assets/save.png";
import { useNavigate } from "react-router-dom";
import docx from "../assets/docx.png";
import { SubPagesQuestionsTab } from "./SubPagesQuestionsTab";
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

export const FileQuestionsPage = ({ filename }) => {
  const navigate = useNavigate();
  const [isopen, setIsopen] = useState(false);
  const [name, setIsname] = useState("Questions");
  const [isopenQue, setIsopenQue] = useState(false);
  const [nameuser, setnameuser] = useState("Bypetitionar");

  /////////////Function go to back page
  const hadleClickBack = () => {
    navigate("/");
  };

  ///////function go to nect page
  const hadleclickNextBtn = () => {
    navigate("/caseflow");
  };

  ///////function open respective page

  const hadleClickCaseDesc = (data) => {
    setIsopen(data.status);
    setIsname(data.name);
  };
  ///////function open respective Questions

  const hadleClickTogglepetionarRres = (data) => {
    setIsopenQue(data.status);
    setnameuser(data.name);
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
            {filename.map((filesUploaded, i) => {
              return (
                <div className="fileUploadDivQus" key={i}>
                  {filesUploaded.type === "application/pdf" ? (
                    <img src={save} alt="" />
                  ) : (
                    <img src={docx} alt="" />
                  )}
                  <p>{filesUploaded.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="FileQuestionsPageRight">
        <div className="subHeddingsBtn">
          <button
            className={name == "CaseDesc" ? "subBtn_qus" : "subBtn"}
            onClick={() =>
              hadleClickCaseDesc({ status: true, name: "CaseDesc" })
            }
          >
            Case Desc
          </button>
          <button
            className={name == "ActsLaws" ? "subBtn_qus" : "subBtn"}
            onClick={() =>
              hadleClickCaseDesc({ status: true, name: "ActsLaws" })
            }
          >
            Acts & Laws
          </button>
          <button
            className={name == "Judgements" ? "subBtn_qus" : "subBtn"}
            onClick={() =>
              hadleClickCaseDesc({ status: true, name: "Judgements" })
            }
          >
            Judgements
          </button>
          <button
            className={name == "Templates" ? "subBtn_qus" : "subBtn"}
            onClick={() =>
              hadleClickCaseDesc({ status: true, name: "Templates" })
            }
          >
            Templates{" "}
          </button>
          <button
            className={name == "Questions" ? "subBtn_qus" : "subBtn"}
            onClick={() =>
              hadleClickCaseDesc({ status: false, name: "Questions" })
            }
          >
            Questions
          </button>
          <button
            className={name == "Support" ? "subBtn_qus" : "subBtn"}
            onClick={() =>
              hadleClickCaseDesc({ status: true, name: "Support" })
            }
          >
            Support
          </button>
        </div>
        {isopen ? (
          <SubPagesQuestionsTab />
        ) : (
          <div>
            <div>
              <p id="ques">Questions</p>
              <div className="btnsInquestions">
                <button
                  className={
                    nameuser == "Bypetitionar"
                      ? "gradient-button-home"
                      : "gradient-button-res"
                  }
                  onClick={() =>
                    hadleClickTogglepetionarRres({
                      status: true,
                      name: "Bypetitionar",
                    })
                  }
                >
                  By petitionar
                </button>
                <button
                  className={
                    nameuser == "Byrespondant"
                      ? "gradient-button-home"
                      : "gradient-button-res"
                  }
                  onClick={() =>
                    hadleClickTogglepetionarRres({
                      status: false,
                      name: "Byrespondant",
                    })
                  }
                >
                  By respondant
                </button>
              </div>
              {isopenQue ? (
                dogBiteQA.map((question) => {
                  return (
                    <div className="queNans">
                      <p id="questions">{question.question}</p>
                      <p id="reason">reason</p>
                      <p id="answers">{question.answer}</p>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <div className="queNans">
                  <p> Questions by respondent</p>
                </div>
              )}
            </div>
          </div>
        )}

        <button
          className="gradient-button-next"
          onClick={() => hadleclickNextBtn()}
        >
          next
        </button>
      </div>
    </div>
  );
};
