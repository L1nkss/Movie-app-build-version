import ActionType from "../constants/constants";
import GenreAdapter from "../../../../utils/adapters/genre";

const getGenresRequest = () => ({ type: ActionType.GET_GENRES_REQUEST });

const getGenresSuccess = (genres) => ({
  type: ActionType.GET_GENRES_SUCCESS,
  payload: GenreAdapter.addIconField(genres),
});

const getGenresError = () => ({ type: ActionType.GET_GENRES_ERROR });

const changeActiveGenre = (active) => ({ type: ActionType.CHANGE_ACTIVE_GENRE, payload: active });

export {
  getGenresRequest,
  getGenresSuccess,
  getGenresError,
  changeActiveGenre,
};
