import { connect } from "react-redux";
import { getGenresRequest } from "../../redux/reducers/genres/actions/actions";
import AsideMenu from "./aside-menu";

const mapStateToProps = (state) => ({
  isLoading: state.genre.loading,
  isError: state.genre.error,
  genres: state.genre.genres,
  filmGenres: state.genre.filmGenres,
});

const mapDispatchToProps = (dispatch) => ({
  loadGenres: () => dispatch(getGenresRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);
