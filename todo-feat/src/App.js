import React, { Component } from 'react'
import './App.css'
import ToDoList from './containers/ToDoList'
// import ToDoItem from './components/ToDoItem'
// import NewToDoForm from './components/NewToDoForm'

// class ToDoList extends Component {
//   state = {
//     tasks: this.props.tasks,
//     draft: ''
//   }

//   updateDraft = e => {
//     this.setState({
//       draft: e.target.value
//     })
//   }

//   addNewTask = e => {
//     const { tasks, draft } = this.state;
//     e.preventDefault()

//     const list = tasks
//     list.push({ text: draft, done: false })

//     this.setState({
//       tasks: list,
//       draft: ''
//     })
//   }

//   render() {
//     const { tasks, draft } = this.state;
//     const { title } = this.props;

//     return (
//       <>
//         <h1>{ title }</h1>
//         { tasks.map(task => <ToDoItem text={task.text} done={task.done} />) }
//         <NewToDoForm 
//           onSubmit={ this.addNewTask }
//           onChange={ this.updateDraft }
//           draft={ draft }
//         />
//       </>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
