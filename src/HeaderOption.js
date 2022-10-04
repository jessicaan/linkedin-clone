import React from "react";
import "./styles/HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__avatar"
          src={user?.photoURL || avatar}
        />
      )}
      <h6 className="headerOption__title">{title}</h6>
    </div>
  );
}

export default HeaderOption;
