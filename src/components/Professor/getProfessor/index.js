import { useState, useEffect } from "react";

const GetProfessor = () => {
  const [professor, setProfessor] = useState({});

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

  return (
    <div>
      <h4>Dados do Professor</h4>
      <br />
      <table id="professor">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr key={professor.id}>
            <td>{professor.nome}</td>
            <td>{professor.dataNascimento}</td>
            <td>{professor.telefone}</td>
            <td>{professor.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GetProfessor;