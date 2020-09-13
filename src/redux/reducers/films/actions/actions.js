import ActionType from "../constants/constants";
import FilmAdapter from "../../../../utils/adapters/film";
import FilmDetailsAdapter from "../../../../utils/adapters/film-details";

// Запрос на получение всех фильмов
const getFilmsRequest = (type) => ({ type: ActionType.GET_FILMS_REQUEST, payload: type });

// Текущая страница
const setCurrentPage = (page) => ({ type: ActionType.SET_CURRENT_PAGE, payload: page });

// Фильмы получены успешно
const getFilmsSuccess = (films, totalPages) => (
  { type: ActionType.GET_FILM_SUCCESS, payload: { data: FilmAdapter.changeKeyName(films), totalPages } }
);

// Получить больше фильмов(следующая страница с фильмами). Запрос
const getMoreFilmsRequest = (type, page) => (
  { type: ActionType.GET_MORE_FILM_REQUEST, payload: { type, page } });

// Фильмы получены
const getMoreFilmsSuccess = (films) => (
  { type: ActionType.GET_MORE_FILM_SUCCESS, payload: FilmAdapter.changeKeyName(films) });

// Ошибка при получении фильмов
const getFilmsError = () => ({ type: ActionType.GET_FILM_ERROR });

// Установить строку с поисками фильмов
const setSearchString = (value) => ({ type: ActionType.SET_SEARCH_STRING, payload: value });

// Получить детальную информацию о фильме. Запрос
const getFilmDetailsRequest = (id) => ({ type: ActionType.GET_FILM_DETAILS_REQUEST, payload: id });

// Детальная информация полученая
const getFilmDetailsSuccess = (film) => (
  { type: ActionType.GET_FILM_DETAILS_SUCCESS, payload: FilmDetailsAdapter.changeValuesToFilmDetails(film) }
);

// Ошибка при получении детальной информации
const getFilmDetailsError = () => ({ type: ActionType.GET_FILM_DETAILS_ERROR });

export {
  getFilmsError,
  getFilmsRequest,
  getFilmsSuccess,
  getMoreFilmsRequest,
  getMoreFilmsSuccess,
  setCurrentPage,
  setSearchString,
  getFilmDetailsRequest,
  getFilmDetailsSuccess,
  getFilmDetailsError,
};
