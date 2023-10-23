import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()

    return (
        <header>
            <AppBar>
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{textAlign: 'center'}}>
                            <Typography>Auto Notas</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header