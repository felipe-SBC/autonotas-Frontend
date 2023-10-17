import { useState, useEffect } from "react";

const GetAluno = () => {
  const [aluno, setAluno] = useState({});

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/alunos/2");

        const dados = await resposta.json();
        console.log(JSON.stringify(dados));

        setProfessor(dados);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, []);

  return (
    <div>
      <h4>Dados do Aluno</h4>
      <br />
      <table id="aluno">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr key={aluno.id}>
            <td>{aluno.nome}</td>
            <td>{aluno.dataNascimento}</td>
            <td>{aluno.telefone}</td>
            <td>{aluno.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GetAluno;