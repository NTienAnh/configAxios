import { combineReducers } from "redux";
// Khai báo từng reducer
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
