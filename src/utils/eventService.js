const BASE_URL = "/api/events/";

function index() {
  return fetch(BASE_URL)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
}


export default {
    index
}

