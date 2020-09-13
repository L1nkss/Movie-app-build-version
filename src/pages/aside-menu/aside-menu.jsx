import MenuList from "../../components/menu-list/menu-list.connect";
import React, { useEffect } from "react";
import Spinner from "../../components/spinner/spinner";

const AsideMenu = (props) => {
  useEffect(() => {
    props.loadGenres();
  }, []);
  return (
    <aside className="side-menu">
      <div>
        <img width={100} src="image/watch-movie.svg" alt="Лого" />
      </div>
      {props.isLoading && <Spinner />}
      {!props.isLoading && (
      <>
        <div>
          <h3>Фильмы</h3>
          <MenuList items={props.filmGenres} />
        </div>
        <div>
          <h3>Жанры</h3>
          <MenuList items={props.genres} />
        </div>
      </>
      )}
    </aside>
  );
};

export default AsideMenu;
