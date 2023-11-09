import { TextField, Grid, Button, Typography, Paper, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../../Context";

const LoginAluno = () => {

    const {userId, setUserId} = useContext(UserContext);
    const [login, setLogin] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin((values) => ({ ...values, [name]: value }));
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(JSON.stringify(login));
        try {
          const resposta = await fetch("http://localhost:8080/alunos/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
          });
          console.log(resposta);
          if(resposta.ok){
            const id = await resposta.json();
            alert("Login realizado com sucesso!");
            navigate(`/aluno/get`);
            console.log(`Resposta do server:${id}`)
            setUserId(id);
          }else{
            console.log(`Erro na aplicação: ${resposta.status}`)
          }
          return resposta;
        } catch (error) {
          console.log(error);
        }
    };

    return(
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <form onSubmit={handleSubmit}>
                <Paper 
                    elevation={2}
                    sx={{
                    backgroundColor: '#F7F9F9', paddingTop: '36px', paddingBottom: '36px', borderRadius: '10px', width: '400px',
                    textAlign: 'center', marginTop: '20%'
                    }}
                >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Fazer Login</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="email" label="E-mail" name="email" type="email" value={login.email} onChange={handleChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="senha" label="Senha" name="senha" type="password" value={login.senha} onChange={handleChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained">Enviar</Button>
                    </Grid>                    
                </Grid>
                </Paper>
            </form>
        </Box>
    )
}

export default LoginAluno;