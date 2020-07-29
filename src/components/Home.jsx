import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import { Menu } from '@material-ui/icons';

const Home = () => {
    return (
        <div>
            <div>
                <NavBar/>
            </div>

            <header className="App-header" style={{background: '#7FBDFF'}}>
                <h1 className="App-title" style={{textAlign: 'center'}}>
                    AÑADE, BUSCA y COLABORA CON RESEÑAS DE TUS PELÍCULAS FAVORITAS
                </h1>
                <p className='App-title' style={{textAlign: 'center'}}>
                    Presiona el ícono <Menu/> para realizar una acción.
                </p>
            </header>
        </div>
    );
}
 
export default Home;

