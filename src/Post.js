import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import InputOption from "./InputOption";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoURL}>{name[0]}</Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message} </p>
      </div>

      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpOutlinedIcon}
          title="Curtir"
          color="#666666"
        />
        <InputOption
          Icon={InsertCommentOutlinedIcon}
          title="Comentar"
          color="#666666"
        />
        <InputOption
          Icon={ShortcutOutlinedIcon}
          title="Compartilhar"
          color="#666666"
        />
        <InputOption Icon={SendOutlinedIcon} title="Enviar" color="#666666" />
      </div>
    </div>
  );
});

export default Post;
