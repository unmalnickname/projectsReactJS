import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";

//

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(2);
    axios.get("url/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID ID_number"
      }
    });
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
