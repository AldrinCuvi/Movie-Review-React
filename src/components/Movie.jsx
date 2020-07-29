import React from "react";
import NavBar from "./NavBar";

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
      <div>
        <NavBar />
        <div>{this.state.activeMovie.nombre_pelicula}</div>
      </div>
    );
  }
}

export default Movie;
