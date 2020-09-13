export default class FilmAdapter {
  static changeKeyName(values) {
    return values.map(this.changeValues);
  }

  static changeValues(value) {
    return {
      genreIds: value.genre_ids,
      id: value.id,
      overview: value.overview,
      title: value.title,
      adult: value.adult,
      posterPath: value.poster_path,
      originalLanguage: value.original_language,
      voteAverage: value.vote_average,
      releaseDate: value.release_date,
    };
  }
}
