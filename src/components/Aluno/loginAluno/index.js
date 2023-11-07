import { TextField, Grid, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";

const LoginAluno = () => {

    const [login, setLogin] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin((values) => ({ ...values, [name]: value }));
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(JSON.stringify(login));
        try {
          const resposta = await fetch("http://localhost:8080/aluno/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
          });
          console.log(resposta);
          return resposta;
        } catch (error) {
          console.log(error);
        }
    };

    return(
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
        </div>
    )
}
 
export default LoginAluno;
