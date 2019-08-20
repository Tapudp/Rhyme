import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import SearchResult from "./SearchResult";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };
  }

  onChange = e => {
    const terms = e.target.value.split(" ");
    const lastWord = terms[terms.length - 1];

    fetch(`http://api.datamuse.com/words?rel_rhy=${lastWord}&md=d`)
      .then(res => {
        return res.json();
      })
      .then(words => this.setState({ searchResults: words }));
  };

  render() {
    console.log(this.state.searchResults);
    return (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="container">
          <div className="title">Find a Rhyme</div>
          <input
            className="searchInput"
            placeholder="start typing to find words that rhyme"
            onChange={this.onChange}
          />
          <div className="resultsContainer">
            {this.state.searchResults.map((result, id) => (
              <SearchResult result={result} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
