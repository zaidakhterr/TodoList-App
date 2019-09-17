import React, { Component } from 'react';

import '../Styles/EditTodoForm.scss';

export class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.todo.id,
      task: this.props.todo.task,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveTodo(this.state);
  }

  render() {
    return (
      <div className='EditTodoForm'>
        <form onSubmit={this.handleSubmit}>
          <input
            className='EditTodoForm-textField'
            type='text'
            name='task'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <input className='EditTodoForm-btn btn' type='submit' value='Save' />
        </form>
      </div>
    );
  }
}

export default EditTodoForm;
