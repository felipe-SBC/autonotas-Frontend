import { useState, useEffect } from "react";

const GetDisciplina = () => {
  const [disciplina, setDisciplina] = useState({});

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/disciplinas/2");

        const dados = await resposta.json();
        console.log(JSON.stringify(dados));

        setDisciplina(dados);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, []);

  return (
    <div>
      <h4>Dados da Disciplina</h4>
      <br />
      <table id="disciplina">
        <thead>
          <tr>
            <th>Nome da Disciplina</th>
            <th>Nome do Professor</th>
          </tr>
        </thead>
        <tbody>
          <tr key={disciplina.idDisciplina}>
            <td>{disciplina.nomeDisciplina}</td>
            <td>{disciplina.nomeProfessor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GetDisciplina;