import { put, call, takeEvery } from "redux-saga/effects";
import ActionType from "../constants/constants";
import { getGenresSuccess, getGenresError } from "../actions/actions";
import { setCurrentPage } from "../../films/actions/actions";
import Service from "../../../../api/api";

function* genreSaga() {
  try {
    const response = yield call(Service.getGenres);
    yield put(getGenresSuccess(response.data.genres));
    yield put(setCurrentPage(1));
  } catch (e) {
    yield put(getGenresError());
  }
}

export default function* watchGenreSaga() {
  yield takeEvery(ActionType.GET_GENRES_REQUEST, genreSaga);
}
