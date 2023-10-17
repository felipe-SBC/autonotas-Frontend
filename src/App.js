import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProfessor from "./components/Professor/createProfessor";
import GetProfessor from "./components/Professor/getProfessor";
import UpdateProfessor from "./components/Professor/updateProfessor";
import CreateAluno from "./components/Aluno/createAluno";
import GetAluno from "./components/Aluno/getAluno";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/professor/create" element={<CreateProfessor />} />
        <Route path="/professor/update" element={<UpdateProfessor />} />
        <Route path="/professor/get" element={<GetProfessor />} />
        <Route path="/aluno/create" element={<CreateAluno />} />
        <Route path="/aluno/update" element={<UpdateProfessor />} />
        <Route path="/aluno/get" element={<GetAluno />} />
      </Routes>
    </Router>
  );
};
export default App;