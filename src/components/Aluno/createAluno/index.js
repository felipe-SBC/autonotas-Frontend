import React, { useState } from "react";

const CreateAluno = () => {
  const [aluno, setAluno] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAluno((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(aluno));
    try {
      const resposta = await fetch("http://localhost:8080/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Fazer cadastro</h4>
        <label>
          Nome:
          <input
            name="nome"
            type="text"
            value={aluno.nome || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Data de nascimento:
          <input
            name="data_nascimento"
            type="date"
            value={aluno.dataNascimento || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Telefone:
          <input
            name="telefone"
            type="text"
            value={aluno.telefone || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={aluno.email || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateAluno;