import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5148fb123f6a856dd883151d44338f516c64b51f951bfa02d5c1b2a25a2fc595"
  }
});

// definiendo parametros que se pueden usar como default
// para no tener que definirlos al momento que se esta usando oh
// haciendo una peticion con axios
