import { FILM_NAVIGATION } from "../../../constants/contants";
import ActionType from "./constants/constants";

const initialState = {
  genres: [],
  filmGenres: FILM_NAVIGATION,
  active: FILM_NAVIGATION[0].label,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_GENRES_REQUEST:
      return { ...state, loading: true };

    case ActionType.GET_GENRES_SUCCESS:
      return { ...state, loading: false, genres: action.payload };

    case ActionType.GET_GENRES_ERROR:
      return { ...state, loading: false, error: true };

    case ActionType.CHANGE_ACTIVE_GENRE:
      return { ...state, active: action.payload };

    default:
      return state;
  }
};

export { reducer };
