import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FeedIcon from "@mui/icons-material/Feed";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
import { Avatar } from "@mui/material";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__formContainer">
          <div className="avatar__div">
            <Avatar src={user.photoURL} sx={{ width: 50, height: 50 }} />
          </div>
          <div className="feed__input">
            <CreateIcon />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="  Começar publicação"
              />
              <button type="submit" onClick={sendPost}>
                Publicar
              </button>
            </form>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Foto" color="#70b5f9" />
          <InputOption Icon={YouTubeIcon} title="Vídeo" color="#5f9b41" />
          <InputOption Icon={BusinessCenterIcon} title="Vaga" color="#a872e8" />
          <InputOption
            Icon={FeedIcon}
            title="Escrever Artigo"
            color="#e16745"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
