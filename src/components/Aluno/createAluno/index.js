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
        mode: 'no-cors',
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
          Curso:
          <input
            name="curso"
            type="text"
            value={aluno.curso || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          RA:
          <input
            name="ra"
            type="text"
            value={aluno.ra || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          CEP:
          <input
            name="cep"
            type="text"
            value={aluno.cep || ""}
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
        <label>
          Senha:
          <input
            name="senha"
            type="password"
            value={aluno.senha || ""}
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