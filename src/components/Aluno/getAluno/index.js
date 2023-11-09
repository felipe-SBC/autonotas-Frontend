import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../Context";
import { Grid, Typography, Paper, Button, Box } from "@mui/material";
import { useNavigate } from "react-router";

const GetAluno = () => {

  const navigate = useNavigate()
  const {userId} = useContext(UserContext)
  const [aluno, setAluno] = useState({});

  useEffect(() => {
    const consulta = async () => { 
      try {
        const resposta = await fetch(`http://localhost:8080/alunos/${userId}`);

        const dados = await resposta.json();
        console.log(JSON.stringify(dados));

        setAluno(dados);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, [userId]);

  const handleClick = () => {
    navigate(`/aluno/update/${userId}`)
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
            <Typography variant="h5">Dados do Aluno</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Nome: " + aluno.nome}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Curso: " + aluno.curso}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"RA: " + aluno.ra}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"E-mail: " + aluno.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Cep: " + aluno.cep}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Endereço: " + aluno.logradouro + ", " + aluno.bairro + " - " + aluno.uf}</Typography>
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

export default GetAluno;