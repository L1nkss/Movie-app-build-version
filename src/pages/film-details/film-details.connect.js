import { connect } from "react-redux";
import FilmDetails from "./film-details";
import { getFilmDetailsRequest } from "../../redux/reducers/films/actions/actions";

const mapStateToProps = (state) => ({
  details: state.films.filmDetails.details,
  loading: state.films.filmDetails.loading,
  error: state.films.filmDetails.error,
});

const mapDispatchToProps = (dispatch) => ({
  loadDetails: (id) => dispatch(getFilmDetailsRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
