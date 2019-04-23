import React from 'react';
import * as TodoUtils from '../../utils/todo_utils'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
      id: ''
    }
  }

  handleClick(e) {
    e.preventDefault();
    // use a prop that will be passed from container, createTodo, for example
    const updateState = Object.assign({}, this.state)
    updateState.id = TodoUtils.uniqueId();
    this.props.receiveTodo(updateState);
    this.setState({
      id: '',
      title: '',
      body: '',
      done: false
    })
  }

  updateTitle(e) {
    e.preventDefault();
    const titleInput = e.currentTarget.value;
    this.setState({title: titleInput});
  }

  render() {
    return(
      <form>
        <label>Title
          <input
            type="text"
            value={ this.state.title }
            onChange={this.updateTitle.bind(this)}
          />
        </label>
        <button onClick={this.handleClick.bind(this)}>Create New Todo</button>
      </form>
    );
  }
  
}

export default TodoForm;