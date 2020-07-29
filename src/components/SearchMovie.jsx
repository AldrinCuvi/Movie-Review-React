import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import NavBar from './NavBar' 

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(3),
        marginTop: 30,
        margin: 'auto',
        maxWidth: 400,
        minWidth: 150,
    },
    links: {
        textDecoration: "none",
        color: 'inherit'
    }
}));


const SearchMovie = ({ getMovies }) => {
        
    const classes = useStyles();

    // const [disableButton, setDisableButton] = React.useState(false);

    // const [error, setError] = React.useState({
    //     isError: false,
    //     msg: "",
    // });

    // const [formValues, setFormValues] = React.useState({
    //     searchValue: "",
    //     searchCriteria: "id_pelicula",
    // });

    // const handleChange = (event) => {
    //     const previousValues = {
    //       ...formValues,
    //       [event.target.name]: event.target.value,
    //     };
    //     setFormValues(previousValues);
    // };

    // const handleValidation = (e) => {
    //     e.preventDefault();
    //     if (formValues.searchValue.length === 0) {
    //       setError({
    //         isError: true,
    //         msg: "Debes rellenar el campo.",
    //       });
    //     } else if (
    //       !formValues.searchValue.match(
    //         /^[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    //       )
    //     ) {
    //       setError({
    //         isError: true,
    //         msg: "Realiza un búsqueda correcta.",
    //       });
    //     } else {
    //       setError({
    //         isError: false,
    //         msg: "",
    //       });
    //       setDisableButton(true);
    //       getMovies(formValues, setDisableButton);
    //     }
    // };

    return ( 
        <div>
            <NavBar/>
            <div>
                <Paper className={classes.paper} elevation={3}>
                    <Grid container direction="column" justify="space-between" alignItems="center">
                        <h1 style={{color:'#404040', marginTop:'3rem', marginBottom:0, textAlign:'center'}}>Escoje el tipo de búsqueda:</h1>
                        <Grid item>
                            <div style={{margin:'1rem'}}>
                                <Button
                                    variant="contained"
                                    style={{background:'#54FFA2'}}
                                    size="small"
                                    className={classes.button}
                                >
                                    Título
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{background:'#54FFA2'}}
                                    size="small"
                                    className={classes.button}
                                >
                                    Año
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{background:'#54FFA2'}}
                                    size="small"
                                    className={classes.button}
                                >
                                    Actor
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{background:'#54FFA2'}}
                                    size="small"
                                    className={classes.button}
                                >
                                    Género
                                </Button>
                            </div>
                        </Grid>
                        <form noValidate>
                            <TextField
                                id="outlined-textarea"
                                label="Buscar"
                                placeholder="Ej: Avengers: Endgame" 
                                size="small"
                                variant="outlined"
                                fullWidth
                            />

                            <Grid item container justify="center">
                                <Link to={{ pathname:'/SearchMovie' }} className={classes.links}>
                                    <Button
                                        variant="contained"
                                        style={{background:'#7FBDFF'}}
                                        size="large"
                                        className={classes.button}
                                        startIcon={<Search />}                               
                                    >
                                        Buscar
                                    </Button>
                                </Link>
                            </Grid>
                        </form>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
}
 
export default SearchMovie;