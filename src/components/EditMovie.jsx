import React from 'react';
import { TextField, Button, Paper, Grid, Typography } from '@material-ui/core';
import { Update } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },

    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(3),
        margin: 'auto',
        maxWidth: 500,
        minWidth: 200,
        minHeight: 600
    },

}));

function EditMovie() {

    const classes = useStyles();

    return ( 
        <div>
            <NavBar/>
            <div className={classes.root} style={{padding:'30px'}}>
                <Paper className={classes.paper} elevation={3}>
                    <form noValidate>
                        <Grid container spacing={1} direction="column">
                            <Typography style={{color:'#404040', textAlign:'center'}}>
                                <h2>Realiza los cambios que quieras:</h2>
                            </Typography>
                            <Grid item>
                                <TextField
                                    id="titulo"
                                    label="Título"
                                    placeholder="Ej: Avengers End Game"
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="sinopsis"
                                    label="Sinopsis"
                                    size="small"
                                    multiline
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="actor"
                                    label="Actor(es)"
                                    placeholder="Ej: Robert Downey Jr., Chris Evans, ..."
                                    size="small"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="director"
                                    label="Director"
                                    placeholder="Ej: Joe Russo"
                                    size="small"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="duracion"
                                    label="Duración"
                                    placeholder="Ej: 2:30:00"
                                    size="small"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="genero"
                                    label="Género(s)"
                                    placeholder="Ej: Acción, Comedia, ..."
                                    size="small"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="anio"
                                    label="Año de estreno"
                                    placeholder="Ej: 2020"
                                    size="small"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="calificacion"
                                    label="Calificación"
                                    placeholder="Ej: 9.1"
                                    size="small"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />   
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="clasificacion"
                                    label="Clasificación"
                                    placeholder="Ej: B"
                                    size="small"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item container justify="center">
                                <Button
                                    variant="contained"
                                    style={{background:'#7FBDFF'}}
                                    size="large"
                                    className={classes.button}
                                    startIcon={<Update />}
                                    >
                                        Atualizar
                                </Button>
                            </Grid>
                        </Grid>


                    </form>
                </Paper>
            </div>
        </div>
    );

}

export default EditMovie;