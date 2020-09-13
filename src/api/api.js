import axios from "axios";
import { BASE_URL } from "../constants/contants";
import key from "../config/key";

class Api {

  constructor(url, token) {
    this.api = axios.create({
      baseURL: url,
      params: {
        api_key: token,
      },
      timeout: 90000,
      headers: { "X-Custom-Header": "foobar" },
      withCredentials: false,
    });
    this.token = token;

    this.getGenres = this.getGenres.bind(this);
    this.getFilms = this.getFilms.bind(this);
    this.getFilmDetails = this.getFilmDetails.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);
    this.getFilmCast = this.getFilmCast.bind(this);
    this.getPersonDetails = this.getPersonDetails.bind(this);
    this.discover = this.discover.bind(this);
  }

  // Жанры
  getGenres() {
    return this.api.get("genre/movie/list", { params: { api_key: this.token } });
  }

  // Запросы по фильмам
  getFilms(type, page = 1) {
    return this.api.get(`movie/${type}`, { params: { api_key: this.token, language: "en-US", page } });
  }

  // Запросы по детальной информации о фильме
  getFilmDetails(id) {
    return this.api.get(`movie/${id}`, { params: { api_key: this.token } });
  }

  getRecommendations(id) {
    return this.api.get(`movie/${id}/recommendations`, { params: { api_key: this.token } });
  }

  getFilmCast(id) {
    return this.api.get(`movie/${id}/credits`, { params: { api_key: this.token } });
  }

  // Запросы о актере
  getPersonDetails(id) {
    return this.api.get(`person/${id}`, { params: { api_key: this.token } });
  }

  discover(params) {
    return this.api.get("discover/movie", { params: { api_key: this.token, ...params } });
  }
}

export default new Api(BASE_URL, key);
