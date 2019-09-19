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
      <li className='EditTodoForm'>
        <form className='EditTodoForm-form' onSubmit={this.handleSubmit}>
          {/* <label htmlFor='EditTask'>Edit</label> */}
          <input
            id='EditTask'
            type='text'
            name='task'
            value={this.state.task}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <button>Save</button>
        </form>
      </li>
    );
  }
}

export default EditTodoForm;
