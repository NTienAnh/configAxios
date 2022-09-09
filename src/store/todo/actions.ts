// Constant
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_FAILURE,
  FETCH_TODO_SUCCESS,
} from "./actionTypes";

// Types Defind
import {
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
  FetchTodoFailure,
  FetchTodoFailurePayload,
} from "./types";

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});
//  Xử lý thất bại
export const fetchTodoSuccess = (
  payload: FetchTodoSuccessPayload
): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});
//  Xử lý thất bại
export const fetchTodoFailure = (
  payload: FetchTodoFailurePayload
): FetchTodoFailure => ({
  type: FETCH_TODO_FAILURE,
  payload,
});
