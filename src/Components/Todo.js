import React, { Component } from 'react';

import '../Styles/Todo.scss';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo);
  }

  handleEdit() {
    this.props.editTodo(this.props.todo);
  }

  handleComplete() {
    this.props.completeTodo(this.props.todo);
  }

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.isCompleted ? 'Todo Todo-disabled' : 'Todo'}>
        <p
          className={
            todo.isCompleted ? 'Todo-task Todo-completed' : 'Todo-task'
          }
          onClick={this.handleComplete}>
          {todo.task}
        </p>
        <div className='Todo-btn-group'>
          <button
            className='Todo-btn tooltip'
            onClick={this.handleEdit}
            disabled={todo.isCompleted}>
            <span className='tooltip-text'>Edit</span>
            <i className='fas fa-pen'></i>
          </button>{' '}
          <button
            className='Todo-btn tooltip'
            onClick={this.handleDelete}
            disabled={todo.isCompleted}>
            <span className='tooltip-text'>Delete</span>
            <i className='fas fa-trash'></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Todo;
