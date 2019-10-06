import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import Todo from '../components/Todo';
import NewTodoForm from '../components/NewTodoForm';
import EditTodoForm from '../components/EditTodoForm';

import '../Styles/TodoList.scss';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(todo) {
    this.props.addTodo(todo);
  }

  deleteTodo(todo) {
    this.setState(() => ({
      todos: [...this.state.todos.filter(item => item.id !== todo.id)],
    }));
  }

  editTodo(todo) {
    this.setState(() => ({
      todos: [
        ...this.state.todos.map(item => {
          if (item.id === todo.id) {
            item.isEditing = true;
          }
          return item;
        }),
      ],
    }));
  }

  saveTodo(todo) {
    this.setState(() => ({
      todos: [
        ...this.state.todos.map(item => {
          if (item.id === todo.id) {
            item.task = todo.task;
            item.isEditing = false;
          }
          return item;
        }),
      ],
    }));
  }

  completeTodo(todo) {
    this.setState(() => ({
      todos: [
        ...this.state.todos.map(item => {
          if (item.id === todo.id) {
            item.isCompleted = !item.isCompleted;
          }
          return item;
        }),
      ],
    }));
  }

  render() {
    let todos = this.props.todos.map(todo =>
      todo.isEditing ? (
        <EditTodoForm key={todo.id} todo={todo} saveTodo={this.saveTodo} />
      ) : (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          completeTodo={this.completeTodo}
        />
      )
    );

    return (
      <div className='TodoList'>
        <h1 className='Todolist-header'>
          Todo List <small>A Simple TodoList App Made With React</small>{' '}
        </h1>
        <ul className='TodoList-list'>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
