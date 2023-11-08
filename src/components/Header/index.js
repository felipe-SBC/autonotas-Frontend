import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <header>
            <AppBar>
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <Button href="/"><Typography color='white'>Auto Notas</Typography></Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;