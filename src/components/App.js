import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";

//

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 5148fb123f6a856dd883151d44338f516c64b51f951bfa02d5c1b2a25a2fc595"
      }
    });
    // .then((response) => {
    console.log(response.data.results);
    // });
  }

  render() {
    return (
      <div className=" ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
