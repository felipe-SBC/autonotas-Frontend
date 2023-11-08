import { useState, useEffect } from "react";

const UpdateAlunoDisciplina = () => {
  const [alunoDisciplina, setAlunoDisciplina] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAlunoDisciplina((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/alunosDisciplinas/1");

        const dados = await resposta.json();
        console.log(JSON.stringify(dados));

        setAlunoDisciplina(dados);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, []);

  const handleClick = async (event) => {
    try {
      const resposta = await fetch(
        `http://localhost:8080/alunosDisciplinas/${alunoDisciplina.idAlunoDisciplina}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(alunoDisciplina)
        }
      );
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(alunoDisciplina));
    try {
      const resposta = await fetch("http://localhost:8080/alunosDisciplinas", {
        method: "PUT",
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
        <h4>{`Atualizar Notas do aluno ${alunoDisciplina.nomeAluno} em ${alunoDisciplina.nomeDisciplina}`}</h4>
        <label>
          Nota 1:
          <input
            name="nota1"
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
            value={alunoDisciplina.nota2 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Nota de Atividade:
          <input
            name="notaAtividade"
            value={alunoDisciplina.notaAtividade || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Média:
          <input
            name="media"
            value={alunoDisciplina.media || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
        <button onClick={handleClick}>Deletar Aluno em Disciplina</button>
      </form>
    </div>
  );
};

export default UpdateAlunoDisciplina;