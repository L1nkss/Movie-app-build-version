import { combineReducers } from "redux";
import { reducer as genreReducer } from "../reducers/genres/reducer";
import { reducer as filmsReducer } from "../reducers/films/reducer";

export default combineReducers({
  genre: genreReducer,
  films: filmsReducer,
});
