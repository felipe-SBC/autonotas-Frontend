import { TextField, Grid, Button, Typography, Paper, Box } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context";
import { useNavigate } from "react-router-dom";

const LoginProfessor = () => {

    const {userId, setUserId} = useContext(UserContext)
    const [login, setLogin] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin((values) => ({ ...values, [name]: value }));
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const resposta = await fetch("http://localhost:8080/professores/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
          });
          console.log(resposta);
          if(resposta.ok){
            const id = await resposta.json();
            alert("Login realizado com sucesso!")
            console.log(`Resposta do server:${id}`)
            setUserId(id)
            navigate(`/professor/home`)
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
                    textAlign: 'center', marginTop: "20%"
                    }}
                >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Fazer Login</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="email" label="E-mail" name="email" value={login.email} onChange={handleChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="senha" label="Senha" name="senha" type="password" value={login.senha} onChange={handleChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12} textAlign='center'>
                      <Typography variant="caption"><a href="/professor/create">Cadastre-se</a></Typography>
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
 
export default LoginProfessor;
