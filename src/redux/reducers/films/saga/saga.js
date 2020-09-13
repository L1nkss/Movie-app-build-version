import { put, call, takeEvery } from "redux-saga/effects";
import ActionType from "../constants/constants";
import {
  getFilmsSuccess, getFilmsError, setCurrentPage, getMoreFilmsSuccess, getFilmDetailsSuccess, getFilmDetailsError,
} from "../actions/actions";
import Service from "../../../../api/api";


function* filmsMoreSaga({ payload }) {
  try {
    const response = typeof payload.type === "string"
      ? yield call(Service.getFilms, payload.type, payload.page)
      : yield call(Service.discover, { with_genres: payload.type, page: payload.page });

    yield put(setCurrentPage(response.data.page));
    yield put(getMoreFilmsSuccess(response.data.results));
  } catch (e) {
    yield put(getFilmsError());
  }
}

function* filmsSaga(params) {
  try {
    const type = params.payload;
    const response = typeof type === "string" ? yield call(Service.getFilms, type) : yield call(Service.discover, { with_genres: type });
    yield put(setCurrentPage(response.data.page));
    yield put(getFilmsSuccess(response.data.results, response.data.total_pages));
  } catch (e) {
    yield put(getFilmsError());
    throw new Error("Ошибка при получении списка фильмов");
  }
}

function* getFilmDetailsSaga(params) {
  try {
    const response = yield call(Service.getFilmDetails, Number(params.payload));
    yield put(getFilmDetailsSuccess(response.data));
  } catch (e) {
    yield put(getFilmDetailsError());
    throw new Error("Ошибка при получении информации о фильме");
  }
}

export function* watchFilmsSaga() {
  yield takeEvery(ActionType.GET_FILMS_REQUEST, filmsSaga);
}

export function* watchMoreFilmsSaga() {
  yield takeEvery(ActionType.GET_MORE_FILM_REQUEST, filmsMoreSaga);
}

export function* watchFilmDetailsSaga() {
  yield takeEvery(ActionType.GET_FILM_DETAILS_REQUEST, getFilmDetailsSaga);
}
