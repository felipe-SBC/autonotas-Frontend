import { Grid, Typography, Paper, TextField, Button } from "@mui/material";
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
        <Paper 
          elevation={2}
          sx={{
            backgroundColor: '#F7F9F9', paddingTop: '36px', paddingBottom: '36px', borderRadius: '10px', width: '400px',
            textAlign: 'center', marginTop: '15%', marginLeft: '40%'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography color='black' variant="h6">Cadastrar Aluno</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField id="nome" label="Nome da Aluno" value={aluno.nome} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="curso" label="Curso" value={aluno.curso} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="ra" label="RA do Aluno" value={aluno.ra} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="cep" label="CEP" value={aluno.cep} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="email" type="email" label="Email do aluno" value={aluno.email} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="senha" type="password" label="Senha do Aluno" value={aluno.senha} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Criar Aluno</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default CreateAluno;