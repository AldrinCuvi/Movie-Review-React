import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import NewMovie from './components/NewMovie';
import EditMovie from './components/EditMovie'
import SearchMovie from './components/SearchMovie';
import Movie from './components/Movie';


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/SearchMovie' component={SearchMovie}/>
            <Route path='/movies/NewMovie' component={NewMovie}/>
            <Route path='/movies/id_pelicula' component={EditMovie}/>
            <Route path='/movies/:id_pelicula' component={Movie}/>
        </Switch>
    );
}



export default Routes;