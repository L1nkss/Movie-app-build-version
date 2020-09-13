import { connect } from "react-redux";
import Header from "./header";
import getActiveGenreName from "./selectors/selectors";
import { setSearchString } from "../../redux/reducers/films/actions/actions";

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenreName(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (value) => dispatch(setSearchString(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
