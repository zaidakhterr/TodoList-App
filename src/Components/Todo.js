import React, { Component } from 'react';

import '../Styles/Todo.scss';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick() {
    this.props.deleteTodo(this.props.todo);
  }

  handleEdit() {
    this.props.editTodo(this.props.todo);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className='Todo'>
        <li className='Todo-task'>{todo.task}</li>
        <button className='Todo-btn btn' onClick={this.handleEdit}>
          <i className='fas fa-pen'></i>
        </button>{' '}
        <button className='Todo-btn btn' onClick={this.handleClick}>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    );
  }
}

export default Todo;
