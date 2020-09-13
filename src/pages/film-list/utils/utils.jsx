import React from "react";
import FilmCard from "../../../components/film-card/film-card";

function createFilmCards(films) {
  return films.map((film) => {
    let filmCardProps = {};

    if (!film.posterPath) {
      filmCardProps = {
        name: film.title,
      };
    }

    return (
      <FilmCard
        key={film.id}
        poster={film.posterPath}
        vote={film.voteAverage}
        id={film.id}
        {...filmCardProps}
      />
    );
  });
}

export default createFilmCards;
