import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FileuploadPage } from "./components/FileuploadPage";
import ButtonAppBar from "./components/Navbar";
import { FileQuestionsPage } from "./components/FileQuestionsPage";
import { CaseFlowPage } from "./components/CaseFlowPage";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<FileuploadPage />} />
        <Route path="/questions" element={<FileQuestionsPage />} />
        <Route path="/caseflow" element={<CaseFlowPage />} />
      </Routes>
    </div>
  );
}

export default App;
