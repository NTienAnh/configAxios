import axios from "axios";
// export interface APISIF {
//   url: string;
//   payload: any;
//   params: any;
// }
const url = {
  // tùy chỉnh
  baseURL: "https://jsonplaceholder.typicode.com/",
  UserDetail: "/UserDetail",
  zingHome: "zingHome",
  todoApi: "todos",
  Book: "Book",
  Company: "company",
};
const instance = axios.create({
  baseURL: url.baseURL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default api;
