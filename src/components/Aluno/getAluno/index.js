import { useState, useEffect } from "react";

const GetAluno = () => {
  const [aluno, setAluno] = useState({});

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/alunos/1");

        const dados = await resposta.json();
        console.log(JSON.stringify(dados));

        setAluno(dados);
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
            <th>Curso</th>
            <th>RA</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr key={aluno.id}>
            <td>{aluno.nome}</td>
            <td>{aluno.curso}</td>
            <td>{aluno.ra}</td>
            <td>{aluno.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GetAluno;