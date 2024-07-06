import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FileuploadPage } from "./components/FileuploadPage";
import ButtonAppBar from "./components/Navbar";
import { FileQuestionsPage } from "./components/FileQuestionsPage";
import { CaseFlowPage } from "./components/CaseFlowPage";
import { useState } from "react";

function App() {
  const [filename, setFileName] = useState([]);
  return (
    <div>
      <ButtonAppBar />
      <Routes>
        <Route
          path="/"
          element={
            <FileuploadPage filename={filename} setFileName={setFileName} />
          }
        />
        <Route
          path="/questions"
          element={<FileQuestionsPage filename={filename} />}
        />
        <Route path="/caseflow" element={<CaseFlowPage />} />
      </Routes>
    </div>
  );
}

export default App;
