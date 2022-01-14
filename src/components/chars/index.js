import ComicsArea from "../comicsArea";
import cover from "../../assets/thumb.jpg";

const Characters = ({ comics }) => {
  return (
    <ul className="charSpace">
      {comics.map((comic) => {
        const info = comic.name;
        const comicID = comic.id;
        return (
          <ComicsArea comic={comic} cover={cover} info={info} key={comicID} />
        );
      })}
    </ul>
  );
};
export default Characters;
