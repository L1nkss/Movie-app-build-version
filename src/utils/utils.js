import moment from "moment";

const getRatingClass = (vote) => {
  let result;

  if (vote > 0 && vote <= 5) {
    result = "low";
  }

  if (vote > 5 && vote <= 8) {
    result = "medium";
  }

  if (vote > 8) {
    result = "high";
  }

  return `film-card__rating--${result}-rate`;
};

const calculateAge = (birthDate, deathDate = null, type = true) => {
  const dateStart = type ? moment() : moment(deathDate, "YYYY");
  const dateEnd = moment(birthDate, "YYYY");

  return dateStart.diff(dateEnd, "years");
};

export { getRatingClass, calculateAge };
