import React, { useState } from 'react';
import SearchMovie from './components/SearchMovie';

const apiUrl = "https://api-repuesto.herokuapp.com/";


function App() {
  const [search, setSearch] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async (values, setDisableButton) => {
    setSearch(false);
    const api_url = `${apiUrl}${values.searchCriteria}/${values.searchValues}`;

    const api_call = await fetch(api_url, {
      method: "GET",
    });

    const data = await api_call.json();

    if(data.status === "OK" && values.searchCriteria === "id_pelicula") {
      setMovies([data.movie]);
      setSearch(true);
      setDisableButton(false);
    }else if( data.status === "OK"){
      setMovies(data.movies);
      setSearch(true);
      setDisableButton(false);
    } else {
      setMovies([]);
      setSearch(true);
      setDisableButton(false);
    }
  };

  return (
    <SearchMovie getMovies={getMovies}/>
  );

}

export default App;
