import { useState, useEffect } from "react";

const UpdateDisciplina = () => {
  const [disciplina, setDisciplina] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDisciplina((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/disciplinas/3");

        const dados = await resposta.json();
        console.log(JSON.stringify(dados));

        setDisciplina(dados);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, []);

  const handleClick = async (event) => {
    try {
      const resposta = await fetch(
        `http://localhost:8080/disciplinas/${disciplina.idDisciplina}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(disciplina)
        }
      );
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(disciplina));
    try {
      const resposta = await fetch("http://localhost:8080/disciplinas", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(disciplina)
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Atualizar Disciplina</h4>
        <label>
          Id:
          <input
            name="idDisciplina"
            id="idDisciplina"
            type="text"
            value={disciplina.idDisciplina || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Nome da Disciplina:
          <input
            id="nomeDisciplina"
            name="nomeDisciplina"
            type="text"
            value={disciplina.nomeDisciplina || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
        <button onClick={handleClick}>Deletar Disciplina</button>
      </form>
    </div>
  );
};

export default UpdateDisciplina;