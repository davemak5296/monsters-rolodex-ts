import { Component } from "react";
import { emptyObj, searchBoxProps } from "../../types";
class SearchBox extends Component<searchBoxProps, emptyObj> {
  constructor(props: searchBoxProps) {
    super(props);
  }

  render() {
    return (
      <input
        className="search-box"
        type="text"
        placeholder="search monsters!"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
