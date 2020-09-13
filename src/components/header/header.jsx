import React from "react";

const Header = (props) => {
  function inputSearchHandle(evt) {
    props.changeSearchString(evt.target.value);
  }
  return (
    <div className="header">
      <h2>{props.activeGenre}</h2>
      <form className="search-form">
        <div>
          <span className="search-form__icon fas fa-search" />
          <input className="search-form__input" type="text" placeholder="Найти фильм..." onChange={inputSearchHandle} />
        </div>
      </form>
    </div>
  );
};

export default Header;
