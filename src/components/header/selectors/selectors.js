import { createSelector } from "reselect";

const getActiveGenreName = createSelector(
  (state) => { return [...state.genre.genres, ...state.genre.filmGenres]; },
  (state) => { return state.genre.active; },
  (genres, active) => {
    const idx = genres.findIndex((genre) => genre.label === active);

    return genres[idx].name;
  },
);

export default getActiveGenreName;
