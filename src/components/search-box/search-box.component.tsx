import { searchBoxProps } from "../../types";

const SearchBox = (props: searchBoxProps) => {
  const { onChangeHandler } = props;
  return (
    <input
      className="search-box"
      type="text"
      placeholder="search monsters!"
      onChange={onChangeHandler}
    />
  );
};
// class SearchBox extends Component<searchBoxProps, emptyObj> {
//   constructor(props: searchBoxProps) {
//     super(props);
//   }

//   render() {
//     return (
//       <input
//         className="search-box"
//         type="text"
//         placeholder="search monsters!"
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
