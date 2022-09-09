import api from "../../Apis/index";
import { ITodo } from "../../store/todo/types";

// GetAllContent
const getTodos = () => api.get<ITodo[]>(api.url.todoApi);

export default getTodos;
