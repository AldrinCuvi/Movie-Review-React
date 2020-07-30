import React from "react";
import NavBar from "./NavBar";
import EditMovieForms from "./EditMovieForm";

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
      <React.Fragment>
        <NavBar />
        <EditMovieForms movie={this.props.location.state.movie} />
      </React.Fragment>
    );
  }
}

export default EditMovie;
