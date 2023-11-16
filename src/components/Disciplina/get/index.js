import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GetDisciplina = () => {
  const [disciplina, setDisciplina] = useState({});
  const {id_disciplina} = useParams();
  const navigate = useNavigate()

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

  const handleClick = () => {
    navigate(`/disciplina/update/${id_disciplina}`)
  }

  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Paper 
        elevation={2}
        sx={{
          backgroundColor: '#F7F9F9', paddingTop: '36px', paddingBottom: '36px', borderRadius: '10px', width: '400px',
          textAlign: 'center', marginTop: '70px'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Dados da Disciplina</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Disciplina: " + disciplina.nomeDisciplina}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{"Professor: " + disciplina.nomeProfessor}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => handleClick()} variant="contained">Atualizar</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default GetDisciplina;