import React, { useState } from "react";

const CreateAlunoDisciplina = () => {
  const [alunoDisciplina, setAlunoDisciplina] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAlunoDisciplina((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(alunoDisciplina));
    try {
      const resposta = await fetch("http://localhost:8080/alunosDisciplinas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(alunoDisciplina)
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Adicionar Aluno em uma Disciplina</h4>
        <label>
          Id da Disciplina:
          <input
            name="idDisciplina"
            type="text"
            value={alunoDisciplina.idDisciplina || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Id do Aluno:
          <input
            name="idAluno"
            type="text"
            value={alunoDisciplina.idAluno || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Nota 1:
          <input
            name="nota1"
            type="text"
            value={alunoDisciplina.nota1 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Nota 2:
          <input
            name="nota2"
            type="text"
            value={alunoDisciplina.nota2 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Nota Atividade:
          <input
            name="notaAtividade"
            type="text"
            value={alunoDisciplina.notaAtividade || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateAlunoDisciplina;