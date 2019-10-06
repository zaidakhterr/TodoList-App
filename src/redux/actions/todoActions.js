import uuid from 'uuid';

import {
  ADD_TODO,
  DELETE_TODO,
  SAVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from './index';

export const addTodo = todo => dispatch => {
  const payload = {
    id: uuid(),
    task: todo.task,
    isCompleted: false,
    isEditing: false,
  };
  dispatch({ type: ADD_TODO, payload });
};
