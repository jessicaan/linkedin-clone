import React from "react";
import "./styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { logOut } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logOut());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeRoundedIcon} title="Inicio" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="Minha rede" />
        <HeaderOption Icon={BusinessCenterIcon} title="Vagas" />
        <HeaderOption Icon={ForumRoundedIcon} title="Mensagens" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notificações" />
        <HeaderOption
          avatar="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          title="Eu"
          onClick={logOutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
