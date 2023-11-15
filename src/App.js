import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProfessor from "./components/Professor/createProfessor";
import GetProfessor from "./components/Professor/getProfessor";
import UpdateProfessor from "./components/Professor/updateProfessor";
import CreateAluno from "./components/Aluno/createAluno";
import GetAluno from "./components/Aluno/getAluno";
import UpdateAluno from "./components/Aluno/updateAluno"
import CreateDisciplina from "./components/Disciplina/create";
import UpdateDisciplina from "./components/Disciplina/update";
import GetDisciplina from "./components/Disciplina/get";
import CreateAlunoDisciplina from "./components/AlunoDisciplina/create";
import GetAlunoDisciplina from "./components/AlunoDisciplina/get";
import UpdateAlunoDisciplina from "./components/AlunoDisciplina/update";
import LoginProfessor from "./components/Professor/loginProfessor";
import LoginAluno from "./components/Aluno/loginAluno";
import Dashboard from "./components/Dashboard";
import { UserProvider } from "./Context";

const App = () => {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path="/professor/home" element={<Dashboard />} />
        <Route path="/professor/create" element={<CreateProfessor />} />
        <Route path="/professor/update/:userId" element={<UpdateProfessor />} />
        <Route path="/professor/get" element={<GetProfessor />} />
        <Route path="/aluno/create" element={<CreateAluno />} />
        <Route path="/aluno/update/:userId" element={<UpdateAluno />} />
        <Route path="/aluno/get" element={<GetAluno />} />
        <Route path="/disciplina/create" element={<CreateDisciplina />} />
        <Route path="/disciplina/update/:id_disciplina" element={<UpdateDisciplina />} />
        <Route path="/disciplina/get/:id_disciplina" element={<GetDisciplina />} />
        <Route path="/disciplina/aluno/create" element={<CreateAlunoDisciplina />} />
        <Route path="/disciplina/aluno/get" element={<GetAlunoDisciplina />} />
        <Route path="/disciplina/aluno/update" element={<UpdateAlunoDisciplina />} />
        <Route path="/professor/login" element={<LoginProfessor/>}/>
        <Route path="/aluno/login" element={<LoginAluno/>}/>
      </Routes>
      </UserProvider>
    </Router>
  );
};
export default App;