import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: 30,
    margin: "auto",
    maxWidth: 400,
    minWidth: 150,
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const SearchMovie = ({ getMovies }) => {
  const classes = useStyles();

  const [disableButton, setDisableButton] = React.useState(false);
  const [error, setError] = React.useState({
    isError: false,
    msg: "",
  });
  const [form, setForm] = React.useState({
    search: "",
    searchCriteria: "nombre_pelicula",
  });

  const handleSearchCriteria = (e) => {
    setForm({
      ...form,
      searchCriteria: e.currentTarget.name,
    });
  };

  const handleSearch = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidation = (e) => {
    e.preventDefault();
    if (!form.search.match(/^[0-9a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,100}$/)) {
      setError({
        isError: true,
        msg: "Debes rellenar el campo.",
      });
    } else {
      setDisableButton(true);
      getMovies(form, setDisableButton);
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <Paper className={classes.paper} elevation={3}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <h1
              style={{
                color: "#404040",
                marginTop: "3rem",
                marginBottom: 0,
                textAlign: "center",
              }}
            >
              Escoje el tipo de búsqueda:
            </h1>
            <Grid item>
              <div style={{ margin: "1rem" }}>
                <Button
                  variant="contained"
                  name="nombre_pelicula"
                  style={{ background: "#54FFA2" }}
                  size="small"
                  onClick={handleSearchCriteria}
                  className={classes.button}
                >
                  Titulo
                </Button>
                <Button
                  variant="contained"
                  name="anio_estreno_pelicula"
                  style={{ background: "#54FFA2" }}
                  size="small"
                  onClick={handleSearchCriteria}
                  className={classes.button}
                >
                  Año
                </Button>
                <Button
                  variant="contained"
                  name="actores_pelicula"
                  style={{ background: "#54FFA2" }}
                  size="small"
                  onClick={handleSearchCriteria}
                  className={classes.button}
                >
                  Actor
                </Button>
                <Button
                  variant="contained"
                  name="genero_pelicula"
                  style={{ background: "#54FFA2" }}
                  size="small"
                  onClick={handleSearchCriteria}
                  className={classes.button}
                >
                  Género
                </Button>
              </div>
            </Grid>
            <form onSubmit={handleValidation} noValidate>
              <TextField
                id="outlined-textarea"
                name="search"
                label="Buscar"
                placeholder="Ej: Avengers: Endgame"
                size="small"
                variant="outlined"
                error={error.isError}
                helperText={error.isError ? error.msg : null}
                onChange={handleSearch}
                fullWidth
              />

              <Grid item container justify="center">
                <Button
                  type="submit"
                  variant="contained"
                  style={{ background: "#7FBDFF" }}
                  size="large"
                  disabled={disableButton}
                  className={classes.button}
                  startIcon={<Search />}
                >
                  Buscar
                </Button>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default SearchMovie;
