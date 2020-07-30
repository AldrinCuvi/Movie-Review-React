import React from "react";
import NavBar from './NavBar';
import MovieSchema from "./MovieSchema"

class Movie extends React.Component {
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
      <React.Fragment>
        <NavBar/>
        <MovieSchema 
          movie={this.state.activeMovie}
          history={this.props.history}
        />
      </React.Fragment>
    );
  }
}

export default Movie;
