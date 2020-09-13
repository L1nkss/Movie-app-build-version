import React from "react";
import { RoutePathes } from "../../../constants/contants";
import history from "../../../utils/history";

const MenuListItem = (props) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
    <li
      className={`menu-list__item ${props.active === props.item.label ? "menu-list__item--active" : ""}`}
      onClick={() => {
        if (props.active === props.item.label) {
          return;
        }
        // Меняем активный жанр
        props.changeActiveGenre(props.item.label);
        // Обнуляем активную страницу
        props.refreshCurrentPage();

        history.push(RoutePathes.MOVIES);
      }}
    >
      <span className={`menu-list__item-icon ${props.item.icon}`} />
      {props.item.name}
    </li>
  );
};

export default MenuListItem;
