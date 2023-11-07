import { useState, useEffect } from "react";

const GetAlunoDisciplina = () => {
  const [alunoDisciplina, setAlunoDisciplina] = useState({});

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/alunosDisciplinas/1");

        const dados = await resposta.json();
        console.log(JSON.stringify(alunoDisciplina));

        setAlunoDisciplina(dados);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, []);

  return (
    <div>
      <h4>{"Notas do " + alunoDisciplina.nomeAluno + " na Disciplina " + alunoDisciplina.nomeDisciplina}</h4>
      <br />
      <table id="aluno">
        <thead>
          <tr>
            <th>Professor</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota Atividade</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>
          <tr key={alunoDisciplina.idAlunoDisciplina}>
            <td>{alunoDisciplina.nomeProfessor}</td>
            <td>{alunoDisciplina.nota1}</td>
            <td>{alunoDisciplina.nota2}</td>
            <td>{alunoDisciplina.notaAtividade}</td>
            <td>{alunoDisciplina.media}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GetAlunoDisciplina;