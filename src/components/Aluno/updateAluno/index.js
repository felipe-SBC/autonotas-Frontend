import { useState, useEffect } from "react";

const UpdateAluno = () => {
  const [aluno, setAluno] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAluno((values) => ({ ...values, [name]: value }));
  };

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

  const handleClick = async (event) => {
    try {
      const resposta = await fetch(
        `http://localhost:8080/alunos/${aluno.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(aluno)
        }
      );
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(aluno));
    try {
      const resposta = await fetch("http://localhost:8080/aluno", {
        method: "PUT",
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
        <h4>Atualizar Dados do Aluno</h4>
        <label>
          Id:
          <input
            name="id"
            type="text"
            value={aluno.id || ""}
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
        <button onClick={handleClick}>Deletar Aluno</button>
      </form>
    </div>
  );
};

export default UpdateAluno;