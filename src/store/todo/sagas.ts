import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./actionTypes";
// Import  Api
import getTodos from "../../Apis/Comany/index";
// import { ITodo } from "./types";

// const getTodos = () =>
//   axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
// axios.get<ITodo[]>("https://62874dfe7864d2883e8279e9.mockapi.io/zingHome");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* fetchTodoSaga() {
  try {
    const response: ResponseGenerator = yield call(getTodos);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
