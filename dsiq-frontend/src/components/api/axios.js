import axios from "axios";

export default axios.create({
  baseURL: "http://dev-api.reviewminer.com/",
});
