import axios from "axios";

const token = axios.create({
  baseURL: "https://moa-api.duckdns.org",
});

const TEST_ACCESS_TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJybGRuZDEyMzQ1NUBuYXZlci5jb20iLCJpYXQiOjE3MzIyNTQ3NDQsImV4cCI6MTczMjg1OTU0NH0.lFD6Cy-x4uFXFVxbEafl3XUTZ4OHswydVEJWTI68Kg8WlvMl7SYcYmnxUjLf7ZSnYPrKmlK_GmHZQeb3XlPMAQ";

token.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${TEST_ACCESS_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default token;
