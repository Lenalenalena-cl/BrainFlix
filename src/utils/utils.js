const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const API_KEY = "d651d1ea-06e6-4f59-a1d8-a36f392d11df";

export const getVideoDetails = () => API_URL + "videos/?api_key=" + API_KEY;

export const getVideoEndpoint = (id) => API_URL + "videos/" + `${id}/` + "?api_key=" + API_KEY;

export const postComment = (id) => API_URL + "videos/" + `${id}/` + "comments/" + "?api_key=" + API_KEY;
