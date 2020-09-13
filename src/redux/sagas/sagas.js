import { all } from "redux-saga/effects";
import watchGenreSaga from "../reducers/genres/saga/saga";
import { watchFilmDetailsSaga, watchMoreFilmsSaga, watchFilmsSaga } from "../reducers/films/saga/saga";

export default function* rootSaga() {
  yield all([
    watchGenreSaga(),
    watchFilmsSaga(),
    watchMoreFilmsSaga(),
    watchFilmDetailsSaga(),
  ]);
}
