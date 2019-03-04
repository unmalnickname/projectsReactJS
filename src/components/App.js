import React from "react";
import unsplash from "../components/api/unsplash";
import SearchBar from "./component/SearchBar";
import ImageList from "./component/ImageList";

//

class App extends React.Component {
  state = { images: {} };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });
    // .then((response) => {
    this.setState({ images: response.data.results });
    // });
  };

  render() {
    return (
      <div className=" ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} Images
      </div>
    );
  }
}

export default App;
