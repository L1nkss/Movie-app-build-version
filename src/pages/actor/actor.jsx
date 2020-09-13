import React from "react";
import Spinner from "../../components/spinner/spinner";
import { useEffect, useState } from "react";
import createFilmCards from "../film-list/utils/utils";
import moment from "moment";
import FilmAdapter from "../../utils/adapters/film";
import Service from "../../api/api";
import ActorAdapter from "../../utils/adapters/actor";
import { calculateAge } from "../../utils/utils";

const Actor = (props) => {
  const { id } = props.match.params;
  const [isPersonDetailsLoading, setLoading] = useState(false);
  const [details, setDetails] = useState();
  const [isFilmLoaded, setFilmLoad] = useState(false);

  useEffect(() => {
    // Вн. асинх. функция, нужна, чтобы стейт не изменялся раньше, чем придут данные с сервера
    const innerAsyncFunction = async () => {
      setLoading(true);

      await Service.getPersonDetails(id)
        .then((body) => {
          setDetails(((prevState) => ({ ...prevState, ...ActorAdapter.adaptValues(body.data) })));
        });

      setLoading(false);
    };

    try {
      innerAsyncFunction();

      Service.discover({ with_cast: id, sort_by: "release_date.desc" })
        .then((body) => {
          setDetails(((prevState) => ({ ...prevState, films: FilmAdapter.changeKeyName(body.data.results) })));
          setFilmLoad(true);
        });
    } catch (e) {
      throw new Error();
    }
  }, []);

  return (
    <>
      {isPersonDetailsLoading && <Spinner />}
      {!isPersonDetailsLoading && details
      && (
      <>
        <div className="actor-details">
          <div className="actor-details__image-wrapper">
            {details.profilePath
              ? <img src={`https://image.tmdb.org/t/p/w342/${details.profilePath}`} alt="Фотография актера" />
              : <p>No image</p>}

          </div>
          <div className="actor-details__information">
            <h2 className="actor-details__name">{details.name}</h2>

            {details.birthday
             && (
             <div>
               <h3>Дата рождения</h3>
               <p>
                 {moment(details.birthday).format("DD MMMM YYYY") }
                 {details.deathDay ? null : ` (${calculateAge(details.birthday)})`}
               </p>
             </div>
             )}

            {details.deathDay
             && (
             <div>
               <h3>Дата смерти</h3>
               <p>
                 {moment(details.deathDay).format("DD MMMM YYYY") }
                 {` (${calculateAge(details.birthday, details.deathDay, false)})`}
               </p>
             </div>
             )}

            {details.biography
            && (
            <div>
              <h3>Биография</h3>
              <p>{details.biography}</p>
            </div>
            )}

          </div>
        </div>
        <div>
          <h2>Фильмография: </h2>
          <div className="film-list film-list--small">
            {isFilmLoaded && createFilmCards(details.films)}
          </div>
        </div>
      </>
      )}
    </>
  );
};

export default Actor;
