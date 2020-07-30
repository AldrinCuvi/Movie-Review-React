import React from 'react';
import NavBar from './NavBar'
import EditMovieForms from './EditMovieForm';

class EditMovie extends React.Component {

    state = {
        activeMovie: {},
    };        
    
    componentDidMount() {
        if (!this.props.location.state) {
            this.props.history.push("/");
        } else {
            this.setState({
            activeMovie: this.props.location.state.movie,
            });
        }
    }

    render() {
        return ( 
            <React.Component>
                <NavBar/>
                <EditMovieForms movie={this.props.location.state.movie}/>
            </React.Component>
        );
    }
}

export default EditMovie;