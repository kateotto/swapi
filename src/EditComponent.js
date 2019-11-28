import React, { Component } from "react";
import "./EditStyle.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EditComponent extends Component {
  render() {
    // const person = this.props.p;
    console.log(this.props);

    return (
      <div className="form-container">
        <h1>STAR WARS API</h1>
        <div>
          <label for="name_input">Name:</label>
          <input
            id="name_input"
            value={this.props.location.state.person.name}
          />
        </div>
        <br />
        <div>
          <label for="gender_input">Gender: </label>
          <input
            id="gender_input"
            value={this.props.location.state.person.gender}
          />
        </div>
        <br />
        <div>
          <label for="birth_input">Birth: </label>
          <input
            id="birth_input"
            value={this.props.location.state.person.birth_year}
          />
        </div>
        <br />
        <div>
          <label for="hair_input">Hair color: </label>
          <input
            id="hair_input"
            value={this.props.location.state.person.hair_color}
          />
        </div>
        <Link to="/">
          <button>BACK</button>
        </Link>
      </div>
    );
  }
}

export default EditComponent;
