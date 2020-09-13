import { connect } from "react-redux";
import MenuList from "./menu-list";
import { changeActiveGenre } from "../../redux/reducers/genres/actions/actions";
import { setCurrentPage } from "../../redux/reducers/films/actions/actions";

const mapStateToProps = (state) => ({
  activeGenre: state.genre.active,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre: (active) => dispatch(changeActiveGenre(active)),
  refreshCurrentPage: () => dispatch(setCurrentPage(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
