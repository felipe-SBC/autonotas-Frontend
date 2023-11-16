import { TextField, Grid, Button, Typography, Paper, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context";

const CreateDisciplina = () => {
  const [disciplina, setDisciplina] = useState({});
  const {userId} = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDisciplina((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dados = {
        nomeDisciplina: disciplina.nomeDisciplina,
        idProfessor: userId
      }
      const resposta = await fetch("http://localhost:8080/disciplinas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      });
      navigate('/professor/home')
      return resposta;
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Paper 
            elevation={2}
            sx={{
              backgroundColor: '#F7F9F9', paddingTop: '36px', paddingBottom: '36px', borderRadius: '10px', width: '400px',
              textAlign: 'center', marginTop: '70px'
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
              <Button type="submit" variant="contained">Criar</Button>
            </Grid>
          </Grid>
        </Paper>
        </Box>
      </form>
    </div>
  );
};

export default CreateDisciplina;