import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context";

const GetProfessor = () => {

  const navigate = useNavigate()
  const {userId} = useContext(UserContext)
  const [professor, setProfessor] = useState({});

  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch(`http://localhost:8080/professores/${userId}`);
        
        const dados = await resposta.json();
        console.log(JSON.stringify(dados));

        setProfessor(dados);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, [userId]);

  const handleClick = () => {
    navigate(`/professor/update/${userId}`)
  }

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: '#F7F9F9', paddingTop: '36px', paddingBottom: '36px', borderRadius: '10px', width: '400px',
          textAlign: 'left', marginTop: '8%', paddingLeft: '20px'
        }}
      >
      <Grid container spacing={2}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h5">Dados do professor</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Nome: " + professor.nome}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"E-mail: " + professor.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Data de Nascimento: " + professor.data_nascimento}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Telefone: " + professor.telefone}</Typography>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Button onClick={() => handleClick()} variant="contained">Atualizar dados</Button>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Button onClick={() => handleClick()} variant="contained">Deletar usuário</Button>
          </Grid>
      </Grid>
      </Paper>
    </Box>
  );
};

export default GetProfessor;