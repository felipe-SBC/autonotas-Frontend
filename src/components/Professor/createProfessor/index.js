import { TextField, Grid, Button, Typography, Paper } from "@mui/material";
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
        mode: 'no-cors',
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
        <Paper 
            elevation={2}
            sx={{
              backgroundColor: '#F7F9F9', paddingTop: '36px', paddingBottom: '36px', borderRadius: '10px', width: '400px',
              textAlign: 'center'
            }}
          >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Fazer Cadastro</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField id="nome" name="nome" label="Nome" value={professor.nome} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="telefone" name="telefone" label="Telefone" value={professor.telefone} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="email" name="email" type="email" label="Email" value={professor.email} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="senha" type="password" name="senha" label="Senha" value={professor.senha} onChange={handleChange} variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Enviar</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default CreateProfessor;