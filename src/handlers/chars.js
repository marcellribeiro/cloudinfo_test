import axios from "axios";
import md5 from "md5";

const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const timeStamp = Number(new Date());
const hash = md5(timeStamp + privateKey + publicKey);

export default function api(character) {
  return axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/characters?",
    params: {
      ts: timeStamp,
      name: character,
      apikey: publicKey,
      hash,
    },
  });
}
