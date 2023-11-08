import { useState, useEffect } from "react";
import { TextField, Grid, Button, Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";


const UpdateDisciplina = () => {
  const [disciplina, setDisciplina] = useState({});
  const {id_disciplina} = useParams()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDisciplina((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch(`http://localhost:8080/disciplinas/${id_disciplina}`);

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
        <Paper 
            elevation={2}
            sx={{
              backgroundColor: '#F7F9F9', paddingTop: '36px', paddingBottom: '36px', borderRadius: '10px', width: '400px',
              textAlign: 'center', marginTop: '15%', marginLeft: '40%'
            }}
          >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Atualizar Disciplina</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField id="nomeDisciplina" name="nomeDisciplina" label="Nome da Disciplina" value={disciplina.nomeDisciplina} defaultValue={disciplina.nomeDisciplina} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" variant="contained">Atualizar</Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={handleClick} variant="contained">Deletar</Button>
            </Grid>
          </Grid>
        </Paper>        
      </form>
    </div>
  );
};

export default UpdateDisciplina;