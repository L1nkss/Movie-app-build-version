import { Reducer } from "redux";
import ActionType from "./constants/constants";

const initialState = {
  films: [],
  filmDetails: {
    loading: false,
    error: false,
    details: null,
  },
  loading: false,
  loadingMoreFilms: false,
  error: false,
  currentPage: 0,
  totalPages: 0,
  searchString: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS_REQUEST:
      return { ...state, loading: true, error: false };

    case ActionType.GET_FILM_SUCCESS:
      return {
        ...state, loading: false, films: action.payload.data, totalPages: action.payload.totalPages,
      };

    case ActionType.GET_MORE_FILM_REQUEST:
      return { ...state, loadingMoreFilms: true };

    case ActionType.GET_MORE_FILM_SUCCESS:
      return { ...state, loadingMoreFilms: false, films: [...state.films, ...action.payload] };

    case ActionType.GET_TOTAL_FILMS_PAGES:
      return { ...state, totalPages: action.payload };

    case ActionType.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    case ActionType.GET_FILM_ERROR:
      return { ...state, loading: false, error: true };

    case ActionType.SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };

    case ActionType.GET_FILM_DETAILS_REQUEST:
      return { ...state, filmDetails: { ...state.filmDetails, loading: true } };

    case ActionType.GET_FILM_DETAILS_SUCCESS:
      return { ...state, filmDetails: { ...state.filmDetails, loading: false, details: action.payload } };

    case ActionType.GET_FILM_DETAILS_ERROR:
      return { ...state, filmDetails: { ...state.filmDetails, loading: false, error: true } };

    default:
      return state;
  }
};

export { reducer };
