import { connect } from "react-redux";
import FilmList from "./film-list";
import { getFilmsRequest, getMoreFilmsRequest } from "../../redux/reducers/films/actions/actions";
import { getFilteredFilms, getActiveGenre } from "./selectors/selectors";

const mapStateToProps = (state) => ({
  loading: state.films.loading,
  loadingMoreFilms: state.films.loadingMoreFilms,
  error: state.films.error,
  currentGenre: getActiveGenre(state),
  currentPage: state.films.currentPage,
  totalPage: state.films.totalPages,
  films: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms: (type) => dispatch(getFilmsRequest(type)),
  loadMoreFilms: (type, page) => dispatch(getMoreFilmsRequest(type, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
