import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokkk-clone-backend.herokuapp.com/",
});

export default instance;
