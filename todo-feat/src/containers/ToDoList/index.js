import React, { Component } from 'react'

import ToDoItem from '../../components/ToDoItem'
import NewToDoForm from '../../components/NewToDoForm'

class ToDoList extends Component {
    static defaultProps = {
        tasks: [
            { done: false, text: '123' },
            { done: true, text: '456' },
            { text: '123' }
        ],
        title: 'React - powtórka wiedzy'
    }

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
        list.push({ text: draft, done: false })

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
                <h1>{title}</h1>
                {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
                <NewToDoForm
                    onSubmit={this.addNewTask}
                    onChange={this.updateDraft}
                    draft={draft}
                />
            </>
        )
    }
}

export default ToDoList