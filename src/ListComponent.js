import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ListStyle.scss";

class ListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  getPeople = () => {
    axios
      .all([
        axios.get("https://swapi.co/api/people?page=" + 1),
        axios.get("https://swapi.co/api/people?page=" + 2),
        axios.get("https://swapi.co/api/people?page=" + 3),
        axios.get("https://swapi.co/api/people?page=" + 4),
        axios.get("https://swapi.co/api/people?page=" + 5),
        axios.get("https://swapi.co/api/people?page=" + 6),
        axios.get("https://swapi.co/api/people?page=" + 7),
        axios.get("https://swapi.co/api/people?page=" + 8),
        axios.get("https://swapi.co/api/people?page=" + 9)
      ])
      .then(
        axios.spread((e1, e2, e3, e4, e5, e6, e7, e8, e9) => {
          let elem1 = e1.data.results || [];
          let elem2 = e2.data.results || [];
          let elem3 = e3.data.results || [];
          let elem4 = e4.data.results || [];
          let elem5 = e5.data.results || [];
          let elem6 = e6.data.results || [];
          let elem7 = e7.data.results || [];
          let elem8 = e8.data.results || [];
          let elem9 = e9.data.results || [];
          let characters = elem1
            .concat(elem2)
            .concat(elem3)
            .concat(elem4)
            .concat(elem5)
            .concat(elem6)
            .concat(elem7)
            .concat(elem8)
            .concat(elem9);

          this.setState({
            people: characters
          });
        })
      );
  };

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const { people } = this.state;
    return (
      <div>
        {people.map(p => {
          console.log(p);
          return (
            <div className="list-container" key={p.url}>
              <span className="name-container">{p.name}</span>
              <br />
              <Link
                to={{
                  pathname: "/edit",
                  state: { person: p }
                }}
              >
                <span className="button-container">
                  <button>CHECK MORE</button>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListComponent;
