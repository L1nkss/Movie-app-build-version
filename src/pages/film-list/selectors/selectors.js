import { createSelector } from "reselect";

const getFilteredFilms = createSelector(
  (state) => { return state.films.films; },
  (state) => { return state.films.searchString; },
  (films, searchString) => {
    return films.filter((film) => {
      return film.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
    });
  },
);

const getActiveGenre = createSelector(
  (state) => { return [...state.genre.filmGenres, ...state.genre.genres]; },
  (state) => { return state.genre.active; },
  (genres, active) => {
    const idx = genres.findIndex((genre) => genre.label === active);
    return genres[idx].id ? genres[idx].id : genres[idx].label;
  },
);

export { getFilteredFilms, getActiveGenre };
