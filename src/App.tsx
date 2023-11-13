import "./styles/App.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ProjectView from "./routes/project/ProjectView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
