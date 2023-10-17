import React, { useState } from "react";

const CreateProfessor = () => {
  const [professor, setProfessor] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProfessor((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(professor));
    try {
      const resposta = await fetch("http://localhost:8080/professores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(professor)
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
            value={professor.nome || ""}
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
            value={professor.dataNascimento || ""}
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
            value={professor.telefone || ""}
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
            value={professor.email || ""}
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

export default CreateProfessor;