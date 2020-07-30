import React, { useState } from "react";
import SearchMovie from "./components/SearchMovie";
import MovieCards from "./components/MovieCards";
import { Grid } from "@material-ui/core";

const apiUrl = "https://api-repuesto.herokuapp.com/movies/";

function App() {
  const [search, setSearch] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async (values, setDisableButton) => {
    setSearch(false);
    const api_url = `${apiUrl}${values.searchCriteria}/${values.search}`;

    const api_call = await fetch(api_url, {
      method: "GET",
    });

    const data = await api_call.json();

    if (data.status === "OK") {
      setMovies(data.movies);
      setSearch(true);
      setDisableButton(false);
    } else {
      setDisableButton(false);
    }
  };

  return (
    <React.Fragment>
      <SearchMovie getMovies={getMovies} />
      <Grid
        container
        justify="center"
        spacing={4}
        style={{ marginTop: "16px" }}
      >
        {search && movies.length > 0 ? (
          movies.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              key={movie.id_pelicula}
            >
              <MovieCards movie={movie} />
            </Grid>
          ))
        ) : search ? (
          <div>No encontramos la película que quieres buscar.</div>
        ) : null}
      </Grid>
    </React.Fragment>
  );
}

export default App;
