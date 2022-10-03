import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <Avatar src={user.photoURL} />
        <h2>{user.displayName}</h2>
        <h4> {user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Quem visualizou seu perfil</p>
          <p className="sidebar__statNumber">2.540</p>
        </div>
        <div className="sidebar__stat">
          <p>Quem visualizou suas publicações</p>
          <p className="sidebar__statNumber">10.538</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recentes</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareEngeneering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
