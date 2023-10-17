import { useState, useEffect } from "react";

const UpdateProfessor = () => {
  const [professor, setProfessor] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProfessor((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/professores/2");

        const dados = await resposta.json();
        console.log(JSON.stringify(dados));

        setProfessor(dados);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, []);

  const handleClick = async (event) => {
    try {
      const resposta = await fetch(
        `http://localhost:8080/professores/${professor.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(professor)
        }
      );
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(professor));
    try {
      const resposta = await fetch("http://localhost:8080/professores", {
        method: "PUT",
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
        <h4>Atualizar Dados do Professor</h4>
        <label>
          Id:
          <input
            name="id"
            type="text"
            value={professor.id || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
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
            name="dataNascimento"
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
        <button onClick={handleClick}>Deletar Professor</button>
      </form>
    </div>
  );
};

export default UpdateProfessor;