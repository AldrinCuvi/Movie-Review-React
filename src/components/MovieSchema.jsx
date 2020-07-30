import React from "react";
import {
  Typography,
  Grid,
  Snackbar,
  Paper,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { Edit, Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: 30,
    margin: "auto",
    maxWidth: 500,
    minWidth: 200,
    minHeight: 600,
  },
  image: {
    width: 130,
    height: 180,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

const apiUrl = "https://api-repuesto.herokuapp.com/movies/";

const MovieSchema = ({ movie, history }) => {
  const classes = useStyles();

  const [openSucess, setOpenSuccess] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  const {
    id_pelicula,
    nombre_pelicula,
    sinopsis_pelicula,
    actores_pelicula,
    director_pelicula,
    duracion_pelicula,
    genero_pelicula,
    anio_estreno_pelicula,
    clasificacion_pelicula,
    calificacion_pelicula,
  } = movie;

  const deleteMovie = async () => {
    setDisableButton(true);
    setOpenDialog(false);

    const api_call = await fetch(`${apiUrl}${id_pelicula}`, {
      method: "DELETE",
    });

    const result = await api_call.json();
    if (result.status === "OK") {
      setOpenSuccess(true);
      setTimeout(
        (h) => {
          h.push("/");
        },
        3000,
        history
      );
    } else {
      setDisableButton(false);
    }
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Snackbar
        open={openSucess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity="info">
          La reseña fue eliminada correctamente.
        </Alert>
      </Snackbar>
      <div>
        <Paper className={classes.paper} elevation={3}>
          <Grid container justify="center" direction="column">
            <Grid item container justify="center">
              <div className={classes.image}>
                <img
                  className={classes.image}
                  src="https://picsum.photos/id/237/200/300"
                  alt="poster"
                />
              </div>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Título: </h5>
                {nombre_pelicula}
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Sinopsis: </h5>
                {sinopsis_pelicula}
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Año de estreno: </h5>
                {anio_estreno_pelicula}
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Actor(es): </h5>
                {actores_pelicula}
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Director(es): </h5>
                {director_pelicula}
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Duración: </h5>
                {duracion_pelicula}
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Género(s): </h5>
                {genero_pelicula}
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Calificación: </h5>
                {calificacion_pelicula}
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>
                <h5 style={{ margin: 0 }}>Clasificación: </h5>
                {clasificacion_pelicula}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid item container justify="space-between" direction="row">
            <Link
              to={{
                pathname: `/movies/editMovie/${id_pelicula}`,
                state: { movie },
              }}
              className={classes.links}
            >
              <Button
                variant="contained"
                size="medium"
                disabled={disableButton}
                style={{ background: "#54FFA2" }}
                startIcon={<Edit />}
              >
                Editar
              </Button>
            </Link>
            <Button
              variant="contained"
              size="medium"
              disabled={disableButton}
              onClick={handleOpenDialog}
              className={classes.deleteButton}
              startIcon={<Delete />}
            >
              Eliminar
            </Button>
            <Dialog
              open={openDialog}
              keepMounted
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"¿Eliminar reseña?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  No podrás revertir esta acción.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                  Cancelar
                </Button>
                <Button onClick={deleteMovie} style={{ color: "#FE3124" }}>
                  Eliminar
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default MovieSchema;
