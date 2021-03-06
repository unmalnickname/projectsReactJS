import React from "react";
//

class SearchBar extends React.Component {
  state = { term: "Hi there!" };

  onFormSummit = (event) => {
    event.preventDefault();

    // console.log(this.state.term);
    console.log(1);

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSummit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
