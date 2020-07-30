import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Grid,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";

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

const apiUrl = "https://api-repuesto.herokuapp.com/movies/";

const NewMovie = () => {
  const classes = useStyles();

  const [errors, setErrors] = useState({
    nombre: {
      isError: false,
      msg: "",
    },
    sinopsis: {
      isError: false,
      msg: "",
    },
    actores: {
      isError: false,
      msg: "",
    },
    director: {
      isError: false,
      msg: "",
    },
    duracion: {
      isError: false,
      msg: "",
    },
    genero: {
      isError: false,
      msg: "",
    },
    anio: {
      isError: false,
      msg: "",
    },
    clasificacion: {
      isError: false,
      msg: "",
    },
    calificacion: {
      isError: false,
      msg: "",
    },
  });

  const [openSucess, setOpenSuccess] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [form, setForm] = useState({
    fields: {
      nombre: "",
      sinopsis: "",
      actores: "",
      director: "",
      duracion: "",
      genero: "",
      anio: 0,
      clasificacion: "",
      calificacion: 0,
    },
  });

  const postMovie = async () => {
    setDisableButton(true);

    const newBody = {
      nombre_pelicula: form.fields.nombre.trimStart(),
      sinopsis_pelicula: form.fields.sinopsis.trimStart(),
      actores_pelicula: form.fields.actores.trimStart(),
      director_pelicula: form.fields.director.trimStart(),
      duracion_pelicula: form.fields.duracion.trimStart(),
      genero_pelicula: form.fields.genero.trimStart(),
      anio_estreno_pelicula: Number(form.fields.anio),
      clasificacion_pelicula: form.fields.clasificacion.trimStart(),
      calificacion: form.fields.calificacion,
    };

    const api_call = await fetch(`${apiUrl}newMovie/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBody),
    });

    const result = await api_call.json();

    if (result.status === "OK") {
      setOpenSuccess(true);
      setDisableButton(false);
      setForm({
        fields: {
          nombre: "",
          sinopsis: "",
          actores: "",
          director: "",
          duracion: "",
          genero: "",
          anio: 0,
          clasificacion: "",
          calificacion: 0,
        },
      });
    } else {
      setOpenError(true);
      setDisableButton(false);
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    let finalObject = {};
    if (
      !form.fields.nombre.match(/^[0-9a-zA-ZÀ-ÿ.,;«»"\u00f1\u00d1\s]{1,100}$/)
    ) {
      finalObject.nombre = {
        isError: true,
        msg: "Ingresa un título valido.",
      };
    } else {
      finalObject.nombre = {
        isError: false,
        msg: "",
      };
    }

    if (
      !form.fields.sinopsis.match(
        /^[0-9a-zA-ZÀ-ÿ.,;«»"\u00f1\u00d1\s]{1,1000000000}$/
      )
    ) {
      finalObject.sinopsis = {
        isError: true,
        msg: "No debes ingresar caracteres especiales.",
      };
    } else {
      finalObject.sinopsis = {
        isError: false,
        msg: "",
      };
    }

    if (
      !form.fields.actores.match(/^[0-9a-zA-ZÀ-ÿ.,;«»"\u00f1\u00d1\s]{1,100}$/)
    ) {
      finalObject.actores = {
        isError: true,
        msg: "No debes ingresar caracteres especiales.",
      };
    } else {
      finalObject.actores = {
        isError: false,
        msg: "",
      };
    }

    if (
      !form.fields.director.match(/^[0-9a-zA-ZÀ-ÿ.,;«»"\u00f1\u00d1\s]{1,100}$/)
    ) {
      finalObject.director = {
        isError: true,
        msg: "No debes ingresar caracteres especiales.",
      };
    } else {
      finalObject.director = {
        isError: false,
        msg: "",
      };
    }

    if (!form.fields.duracion.match(/^[0-9]{1}:[0-9]{2}:[0-9]{2}$/)) {
      finalObject.duracion = {
        isError: true,
        msg: "No debes ingresar caracteres especiales.",
      };
    } else {
      finalObject.duracion = {
        isError: false,
        msg: "",
      };
    }

    if (
      !form.fields.genero.match(/^[0-9a-zA-ZÀ-ÿ.,;«»"\u00f1\u00d1\s]{1,100}$/)
    ) {
      finalObject.genero = {
        isError: true,
        msg: "No debes ingresar caracteres especiales.",
      };
    } else {
      finalObject.genero = {
        isError: false,
        msg: "",
      };
    }

    if (
      !String(form.fields.anio)
        .trimStart()
        .match(/^[1-2]{1}[0-9]{3}$/)
    ) {
      finalObject.anio = {
        isError: true,
        msg: "",
      };
    } else {
      if (
        Number(form.fields.anio) >= 1920 &&
        Number(form.fields.anio) <= 2020
      ) {
        finalObject.anio = {
          isError: false,
          msg: "",
        };
      } else {
        finalObject.anio = {
          isError: true,
          msg: "",
        };
      }
    }

    if (
      !form.fields.clasificacion.match(
        /^[0-9a-zA-ZÀ-ÿ.,;«»"\u00f1\u00d1\s]{1,10}$/
      )
    ) {
      finalObject.clasificacion = {
        isError: true,
        msg: "No debes ingresar caracteres especiales.",
      };
    } else {
      finalObject.clasificacion = {
        isError: false,
        msg: "",
      };
    }

    if (!form.fields.calificacion.toString().match(/^[0-9]{0,11}$/)) {
      finalObject.calificacion = {
        isError: true,
        msg: "No debes ingresar caracteres especiales.",
      };
    } else {
      finalObject.calificacion = {
        isError: false,
        msg: "",
      };
    }

    if (
      finalObject.nombre.isError ||
      finalObject.sinopsis.isError ||
      finalObject.actores.isError ||
      finalObject.director.isError ||
      finalObject.duracion.isError ||
      finalObject.genero.isError ||
      finalObject.anio.isError ||
      finalObject.clasificacion.isError ||
      finalObject.calificacion.isError
    ) {
      setErrors({
        ...errors,
        ...finalObject,
      });
    } else {
      setErrors({
        nombre: {
          isError: false,
          msg: "",
        },
        sinopsis: {
          isError: false,
          msg: "",
        },
        actores: {
          isError: false,
          msg: "",
        },
        director: {
          isError: false,
          msg: "",
        },
        duracion: {
          isError: false,
          msg: "",
        },
        genero: {
          isError: false,
          msg: "",
        },
        anio: {
          isError: false,
          msg: "",
        },
        clasificacion: {
          isError: false,
          msg: "",
        },
        calificacion: {
          isError: false,
          msg: "",
        },
      });

      postMovie();
    }
  };

  const handleChange = (e) => {
    const previousValues = {
      fields: { ...form.fields, [e.target.name]: e.target.value },
    };
    setForm(previousValues);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className={classes.root} style={{ padding: "30px" }}>
        <Snackbar
          open={openSucess}
          autoHideDuration={6000}
          onClose={handleCloseSuccess}
        >
          <Alert onClose={handleCloseSuccess} severity="success">
            Guardado con éxito.
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert onClose={handleCloseError} severity="error">
            Algo salió al guardar tu reseña :(
          </Alert>
        </Snackbar>
        <Paper className={classes.paper} elevation={3}>
          <form onSubmit={handleValidation} noValidate>
            <Grid container spacing={1} direction="column">
              <Typography style={{ color: "#404040", textAlign: "center" }}>
                <h2>Introduce la información de la película:</h2>
              </Typography>
              <Grid item>
                <TextField
                  id="titulo"
                  name="nombre"
                  label="Título"
                  placeholder="Ej: Avengers End Game"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                  value={form.fields.nombre}
                  onChange={handleChange}
                  error={errors.nombre.isError}
                  helperText={
                    errors.nombre.isError
                      ? "Ingrese un título mayor a 4 caracteres y menor a 100"
                      : null
                  }
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
                  required
                  fullWidth
                  value={form.fields.sinopsis}
                  onChange={handleChange}
                  error={errors.sinopsis.isError}
                  helperText={
                    errors.sinopsis.isError
                      ? "Ingrese una sinopsis mayor a 4 caracteres"
                      : null
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  id="actor"
                  name="actores"
                  label="Actor(es)"
                  placeholder="Ej: Robert Downey Jr., Chris Evans, ..."
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  value={form.fields.actores}
                  onChange={handleChange}
                  error={errors.actores.isError}
                  helperText={
                    errors.actores.isError
                      ? "Ingrese un actor mayor a 4 caracteres y menor a 100"
                      : null
                  }
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
                  required
                  fullWidth
                  value={form.fields.director}
                  onChange={handleChange}
                  error={errors.director.isError}
                  helperText={
                    errors.director.isError
                      ? "Ingrese un director mayor a 4 caracteres y menor a 100"
                      : null
                  }
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
                  required
                  fullWidth
                  value={form.fields.duracion}
                  onChange={handleChange}
                  error={errors.duracion.isError}
                  helperText={
                    errors.duracion.isError
                      ? "Ingrese una duración en formato n:nn:nn. Ej: 1:20:20"
                      : null
                  }
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
                  required
                  fullWidth
                  value={form.fields.genero}
                  onChange={handleChange}
                  error={errors.genero.isError}
                  helperText={
                    errors.genero.isError
                      ? "Ingrese un género mayor a 4 caracteres y menor a 50"
                      : null
                  }
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
                  required
                  fullWidth
                  value={form.fields.anio}
                  onChange={handleChange}
                  error={errors.anio.isError}
                  helperText={
                    errors.anio.isError
                      ? "Ingrese un año mayor a 1920 y menor a 2020"
                      : null
                  }
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
                  required
                  fullWidth
                  value={form.fields.calificacion}
                  onChange={handleChange}
                  error={errors.calificacion.isError}
                  helperText={
                    errors.calificacion.isError
                      ? "Ingrese un número como el siguiente formato: 9.2"
                      : null
                  }
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
                  required
                  fullWidth
                  value={form.fields.clasificacion}
                  onChange={handleChange}
                  error={errors.clasificacion.isError}
                  helperText={
                    errors.clasificacion.isError
                      ? "Ingrese un valor menor a 10 caracteres"
                      : null
                  }
                />
              </Grid>
              <Grid item container justify="center">
                <Button
                  type="submit"
                  variant="contained"
                  style={{ background: "#7FBDFF" }}
                  size="large"
                  className={classes.button}
                  startIcon={<Save />}
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default NewMovie;
