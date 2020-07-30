import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NewMovie from "./components/NewMovie";
import EditMovie from "./components/EditMovie";
import Movie from "./components/Movie";
import App from "./App";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/SearchMovie" component={App} exact />
      <Route path="/movies/NewMovie" component={NewMovie} exact />
      <Route path="/movies/editMovie/:id_pelicula" component={EditMovie} exact />
      <Route path="/movies/:id_pelicula" component={Movie} exact />
    </Switch>
  );  
};

export default Routes;
