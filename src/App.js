import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProfessor from "./components/Professor/createProfessor";
import GetProfessor from "./components/Professor/getProfessor";
import UpdateProfessor from "./components/Professor/updateProfessor";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/createProfessor" element={<CreateProfessor />} />
        <Route path="/updateProfessor" element={<UpdateProfessor />} />
        <Route path="/getProfessor" element={<GetProfessor />} />
      </Routes>
    </Router>
  );
};
export default App;