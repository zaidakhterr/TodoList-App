import React, { Component } from 'react';

import '../Styles/NewTodoForm.scss';

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
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
    this.props.addTodo(this.state);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='NewTask'>New Todo</label>
        <input
          id='NewTask'
          type='text'
          name='task'
          value={this.state.task}
          placeholder='Add todo ...'
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default NewTodoForm;
