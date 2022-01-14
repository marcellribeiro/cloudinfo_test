import React, { useEffect, useState } from "react";
import ComicsArea from "../comicsArea";
import api from "../../handlers/comics";

import "./style.css";
const Comics = () => {
  const [comics, setComics] = useState([].slice(0, 100));

  useEffect(() => {
    api
      .get()
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  function filterDate(a, b) {
    return b.id - a.id;
  }

  let sortedComics = comics.sort(filterDate);

  const showComics = comics.map((comic) => {
    const comicID = comic.id;
    const cover = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    const info = comic.title;
    return <ComicsArea comic={comic} cover={cover} info={info} key={comicID} />;
  });

  return (
    <div className="homeContainer">
      <ul className="charSpace">{showComics}</ul>
    </div>
  );
};
export default Comics;
