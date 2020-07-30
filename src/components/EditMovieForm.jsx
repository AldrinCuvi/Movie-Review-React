import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Grid,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { Update, EditOutlined, CodeSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    maxWidth: 500,
    minWidth: 200,
    minHeight: 600,
  },
}));

const apiUrl = "https://api-repuesto.herokuapp.com/movies/editMovie/";

const EditMovieForms = ({ movie }) => {
  const classes = useStyles();
  const [openSucess, setOpenSuccess] = React.useState(false);
  const [form, setForm] = useState({
    titulo: movie.nombre_pelicula,
    sinopsis: movie.sinopsis_pelicula,
    actor: movie.actores_pelicula,
    director: movie.director_pelicula,
    duracion: movie.duracion_pelicula,
    genero: movie.genero_pelicula,
    anio: String(movie.anio_estreno_pelicula),
    calificacion: String(movie.calificacion_pelicula),
    clasificacion: movie.clasificacion_pelicula,
  });

  const [errors, setErrors] = useState({
    titulo: false,
    sinopsis: false,
    actor: false,
    director: false,
    duracion: false,
    genero: false,
    anio: false,
    calificacion: false,
    clasificacion: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const putMovie = async () => {
    const body = {
      nombre_pelicula: form.titulo,
      sinopsis_pelicula: form.sinopsis,
      actores_pelicula: form.actor,
      director_pelicula: form.director,
      duracion_pelicula: form.duracion,
      genero_pelicula: form.genero,
      anio_estreno_pelicula: form.anio,
      calificacion_pelicula: form.calificacion,
      clasificacion_pelicula: form.clasificacion,
    };

    const api_call = await fetch(`${apiUrl}${movie.id_pelicula}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await api_call.json();

    if (result.status === "OK") {
      setOpenSuccess(true);
    }
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const validations = {};

    if (!form.titulo.trimStart().match(/^[0-9a-zA-Z\s\S]{4,100}$/)) {
      validations.titulo = true;
    } else {
      validations.titulo = false;
    }

    if (!form.sinopsis.trimStart().match(/^[0-9a-zA-Z\s\S]{4,}$/)) {
      validations.sinopsis = true;
    } else {
      validations.sinopsis = false;
    }

    if (!form.actor.trimStart().match(/^[0-9a-zA-Z\s.,]{4,100}$/)) {
      validations.actor = true;
    } else {
      validations.actor = false;
    }

    if (!form.director.trimStart().match(/^[0-9a-zA-Z\s.,]{4,100}$/)) {
      validations.director = true;
    } else {
      validations.director = false;
    }

    if (!form.duracion.trimStart().match(/^[0-9]{1}:[0-9]{2}:[0-9]{2}$/)) {
      validations.duracion = true;
    } else {
      validations.duracion = false;
    }

    if (!form.genero.trimStart().match(/^[0-9a-zA-Z\s\S]{4,50}$/)) {
      validations.genero = true;
    } else {
      validations.genero = false;
    }

    if (!form.anio.trimStart().match(/^[1-2]{1}[0-9]{3}$/)) {
      validations.anio = true;
    } else {
      if (Number(form.anio) >= 1920 && Number(form.anio) <= 2020) {
        validations.anio = false;
      } else {
        validations.anio = true;
      }
    }

    if (!form.calificacion.trimStart().match(/^[0-9]{1}[.,]{1}[0-9]{1}$/)) {
      validations.calificacion = true;
    } else {
      validations.calificacion = false;
    }

    if (!form.clasificacion.trimStart().match(/^[0-9a-zA-Z\s\S]{1,10}$/)) {
      validations.clasificacion = true;
    } else {
      validations.clasificacion = false;
    }

    if (
      validations.calificacion ||
      validations.actor ||
      validations.anio ||
      validations.director ||
      validations.duracion ||
      validations.genero ||
      validations.sinopsis ||
      validations.titulo ||
      validations.clasificacion
    ) {
      setErrors({ ...errors, ...validations });
    } else {
      setErrors({
        titulo: false,
        sinopsis: false,
        actor: false,
        director: false,
        duracion: false,
        genero: false,
        anio: false,
        calificacion: false,
        clasificacion: false,
      });

      putMovie();
    }
  };

  return (
    <div>
      <div className={classes.root} style={{ padding: "30px" }}>
        <Paper className={classes.paper} elevation={3}>
          <Snackbar
            open={openSucess}
            autoHideDuration={3000}
            onClose={handleCloseSuccess}
          >
            <Alert onClose={handleCloseSuccess} severity="success">
              La reseña fue modificada correctamente
            </Alert>
          </Snackbar>
          <form onSubmit={handleValidation} noValidate>
            <Grid container spacing={1} direction="column">
              <Typography style={{ color: "#404040", textAlign: "center" }}>
                <h2>Realiza los cambios que quieras:</h2>
              </Typography>
              <Grid item>
                <TextField
                  id="titulo"
                  name="titulo"
                  label="Título"
                  placeholder="Ej: Avengers End Game"
                  size="small"
                  variant="outlined"
                  value={form.titulo}
                  onChange={handleChange}
                  error={errors.titulo}
                  helperText={
                    errors.titulo
                      ? "Ingrese un título mayor a 4 caracteres y menor a 100"
                      : null
                  }
                  fullWidth
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  id="sinopsis"
                  name="sinopsis"
                  label="Sinopsis"
                  size="small"
                  multiline
                  variant="outlined"
                  value={form.sinopsis}
                  onChange={handleChange}
                  error={errors.sinopsis}
                  helperText={
                    errors.sinopsis
                      ? "Ingrese una sinopsis mayor a 4 caracteres"
                      : null
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="actor"
                  name="actor"
                  label="Actor(es)"
                  placeholder="Ej: Robert Downey Jr., Chris Evans, ..."
                  size="small"
                  variant="outlined"
                  value={form.actor}
                  onChange={handleChange}
                  error={errors.actor}
                  helperText={
                    errors.actor
                      ? "Ingrese un actor mayor a 4 caracteres y menor a 100"
                      : null
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="director"
                  name="director"
                  label="Director"
                  placeholder="Ej: Joe Russo"
                  size="small"
                  variant="outlined"
                  value={form.director}
                  onChange={handleChange}
                  error={errors.director}
                  helperText={
                    errors.director
                      ? "Ingrese un director mayor a 4 caracteres y menor a 100"
                      : null
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="duracion"
                  name="duracion"
                  label="Duración"
                  placeholder="Ej: 2:30:00"
                  size="small"
                  variant="outlined"
                  value={form.duracion}
                  onChange={handleChange}
                  error={errors.duracion}
                  helperText={
                    errors.duracion
                      ? "Ingrese una duración en formato n:nn:nn. Ej: 1:20:20"
                      : null
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="genero"
                  name="genero"
                  label="Género(s)"
                  placeholder="Ej: Acción, Comedia, ..."
                  size="small"
                  variant="outlined"
                  value={form.genero}
                  onChange={handleChange}
                  error={errors.genero}
                  helperText={
                    errors.genero
                      ? "Ingrese un género mayor a 4 caracteres y menor a 50"
                      : null
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="anio"
                  name="anio"
                  label="Año de estreno"
                  placeholder="Ej: 2020"
                  size="small"
                  variant="outlined"
                  value={form.anio}
                  onChange={handleChange}
                  error={errors.anio}
                  helperText={
                    errors.anio
                      ? "Ingrese un año mayor a 1920 y menor a 2020"
                      : null
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="calificacion"
                  name="calificacion"
                  label="Calificación"
                  placeholder="Ej: 9.1"
                  size="small"
                  variant="outlined"
                  value={form.calificacion}
                  onChange={handleChange}
                  error={errors.calificacion}
                  helperText={
                    errors.calificacion
                      ? "Ingrese un número como el siguiente formato: 9.2"
                      : null
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="clasificacion"
                  name="clasificacion"
                  label="Clasificación"
                  placeholder="Ej: B"
                  size="small"
                  variant="outlined"
                  value={form.clasificacion}
                  onChange={handleChange}
                  error={errors.clasificacion}
                  helperText={
                    errors.clasificacion
                      ? "Ingrese un valor menor a 10 caracteres"
                      : null
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item container justify="center">
                <Button
                  type="submit"
                  variant="contained"
                  style={{ background: "#7FBDFF" }}
                  size="large"
                  className={classes.button}
                  startIcon={<Update />}
                >
                  Actualizar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default EditMovieForms;
