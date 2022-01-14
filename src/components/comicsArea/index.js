import React, { useState } from "react";
import "./style.css";
import heart from "../../assets/heart.png";
import heart_empty from "../../assets/heart_empty.png";

const ComicsArea = ({ comic, cover, info, comicID }) => {
  const [display, setDisplay] = useState("charHeartImgEmpty");
  const [heart_src, setHeartSrc] = useState(heart_empty);
  const [clicked, setClicked] = useState("charDetail");
  const [disabledEventsOnComics, setDisabledEvents] = useState([]);

  const showHeart = (e, comicID) => {
    e.preventDefault();
    if (!disabledEventsOnComics.includes(comicID)) {
      setDisplay("charHeartImg");
    }
  };

  const hideHeart = (e, comicID) => {
    e.preventDefault();
    if (!disabledEventsOnComics.includes(comicID)) {
      setDisplay("charHeartImgEmpty");
    }
  };

  const clickComic = (e, comicID) => {
    e.preventDefault();

    if (!disabledEventsOnComics.includes(comicID)) {
      updateComicsState(comicID);
      setHeartSrc(heart);
      setDisplay("charHeartImg");
      setClicked("charDetailClicked");
    } else {
      updateComicsState(comicID);
      setHeartSrc(heart_empty);
      setDisplay("charHeartImgEmpty");
      setClicked("charDetail");
    }
  };

  function updateComicsState(comicID) {
    if (disabledEventsOnComics.includes(comicID)) {
      var newArray = disabledEventsOnComics.filter((e) => e !== comicID);
      setDisabledEvents(newArray);
    } else {
      var newArray = disabledEventsOnComics.concat(comicID);
      setDisabledEvents(newArray);
    }
  }

  return (
    <>
      <li
        key={comicID}
        className={clicked}
        onClick={(e) => clickComic(e, comicID)}
        onMouseEnter={(e) => showHeart(e, comicID)}
        onMouseLeave={(e) => hideHeart(e, comicID)}
      >
        <img className="charSpaceImg" src={cover} alt={`${comic.name} cover`} />
        <img className={display} alt="" src={heart_src} />
        <div className="charSpaceNameArea">
          <span className="charSpaceName">{info}</span>
        </div>
      </li>
    </>
  );
};

export default ComicsArea;
