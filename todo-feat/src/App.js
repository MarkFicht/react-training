import React, { Component } from 'react'
import './App.css'

class ToDoItem extends Component {
  static defaultProps = {
    done: false
  }

  state = {
    done: this.props.done
  }

  toggleDone = () => {
    this.setState({ done: !this.state.done })
  }

  render() {
    const { text } = this.props
    const { done } = this.state

    return (
      <div onClick={this.toggleDone} className={ done ? 'doneToDo' : '' }>
        <p>{text}</p>
      </div>
    )
  }

}

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = e => {
    this.setState({
      draft: e.target.value
    })
  }

  addNewTask = e => {
    const { tasks, draft } = this.state;
    e.preventDefault()

    const list = tasks
    list.push({ text: draft })

    this.setState({
      tasks: list,
      draft: ''
    })
  }

  render() {
    const { tasks, draft } = this.state;
    const { title } = this.props;

    return (
      <>
        <h1>{ title }</h1>
        { tasks.map(task => <ToDoItem text={task.text} done={task.done} />) }
        <input type='text' onChange={ this.updateDraft } value={draft} />
        <button onClick={ this.addNewTask }>ADD</button>
      </>
    )
  }
}

class App extends Component {

  // Test static defaultProps
  tasks = [
    { done: false, text: '123' }, 
    { done: true, text: '456' },
    { text: '123' }
  ]

  render() {

    return (
      <div>
        <ToDoList title='Learning React' tasks={ this.tasks } />
      </div>
    );
  }
}

export default App;
