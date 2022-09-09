import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from "./actionTypes";

import { TodoActions, TodoState } from "./types";

// Init State
const initialState: TodoState = {
  pending: false,
  todos: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: null,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
