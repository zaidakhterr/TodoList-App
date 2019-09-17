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
      <div className='NewTodoForm'>
        <form onSubmit={this.handleSubmit}>
          <input
            className='NewTodoForm-textField'
            type='text'
            name='task'
            value={this.state.task}
            placeholder='Add task ...'
            onChange={this.handleChange}
          />
          <input className='NewTodoForm-btn btn' type='submit' value='Add' />
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
