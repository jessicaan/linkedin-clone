import React from "react";
import "./styles/Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@material-ui/icons";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Notícias LinkedIn </h2>
        <InfoIcon />
      </div>
      {newsArticle("Novidades", "Uma novidade nova todo dia para você")}
      {newsArticle(
        "Cresce a procura por profissionais de TI",
        "O mercado está aquecido"
      )}
      {newsArticle(
        "De olho na Bolsa",
        "Novas empresas unicórnio prometem altos lucros para seus investidores"
      )}
      {newsArticle(
        "Criptoque??",
        "A febre das criptomoedas e como ganhar dinheiro com isso"
      )}
      {newsArticle(
        "Ellon Musk lança curso espacial",
        "Agora é possível estudar fora de órbita"
      )}
      {newsArticle(
        "Carros elétricos dominam o mercado nos EUA",
        "Salvar o planeta está na moda"
      )}
    </div>
  );
}

export default Widgets;
