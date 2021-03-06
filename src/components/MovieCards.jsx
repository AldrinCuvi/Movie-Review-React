import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  paragraphHeight: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  updateButton: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const MovieCards = ({ movie }) => {
  const classes = useStyle();
  const {
    id_pelicula,
    nombre_pelicula,
    sinopsis_pelicula,
    anio_estreno_pelicula,
  } = movie;

  return (
    <Card>
      <Link
        to={{ pathname: `/movies/${id_pelicula}`, state: { movie } }}
        className={classes.links}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="movie-poster"
            height="140"
            image="https://picsum.photos/id/237/200/300"
          ></CardMedia>
          <CardContent>
            <Typography variant="h5" component="h2" noWrap>
              {nombre_pelicula}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              color="textSecondary"
              noWrap
              component="p"
            >
              {anio_estreno_pelicula}
            </Typography>
            <Typography
              variant="body2"
              className={classes.paragraphHeight}
              color="textSecondary"
              component="p"
            >
              {sinopsis_pelicula}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default MovieCards;
