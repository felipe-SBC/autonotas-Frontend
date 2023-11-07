import { TextField, Grid, Button, Typography, Paper } from "@mui/material";
import React, { useState } from "react";

const CreateDisciplina = () => {
  const [disciplina, setDisciplina] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDisciplina((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(disciplina));
    try {
      const resposta = await fetch("http://localhost:8080/disciplinas", {
        mode: 'no-cors',
        method: "POST",
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
              textAlign: 'center'
            }}
          >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Criar Disciplina</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField id="nomeDisciplina" name="nomeDisciplina" label="Nome da Disciplina" value={disciplina.nomeDisciplina} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="idProfessor" name="idProfessor" label="Id do Professor" value={disciplina.idProfessor} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Criar</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default CreateDisciplina;