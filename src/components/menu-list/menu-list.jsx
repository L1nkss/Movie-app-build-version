import React from "react";
import MenuListItem from "./components/menu-list-item";

const MenuList = (props) => {
  return (
    <ul className="menu-list">
      {props.items.map((item) => {
        return (
          <MenuListItem
            key={item.id ? item.id : item.label}
            item={item}
            active={props.noActive ? "" : props.activeGenre}
            changeActiveGenre={props.changeActiveGenre}
            refreshCurrentPage={props.refreshCurrentPage}
          />
        );
      })}
    </ul>
  );
};

MenuList.defaultProps = {
  noActive: false,
};

export default MenuList;
