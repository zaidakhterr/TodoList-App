import uuid from 'uuid';

import {
  ADD_TODO,
  DELETE_TODO,
  SAVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from '../actions';

const initialState = {
  todos: [
    {
      id: uuid(),
      task: 'Take out the trash',
      isCompleted: false,
      isEditing: false,
    },
    {
      id: uuid(),
      task: 'Wash the dishes',
      isCompleted: false,
      isEditing: false,
    },
    {
      id: uuid(),
      task: 'Get the water bottles filled',
      isCompleted: false,
      isEditing: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
