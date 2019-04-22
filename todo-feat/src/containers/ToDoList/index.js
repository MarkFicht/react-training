import React, { Component } from 'react'

import ToDoItem from '../../components/ToDoItem'
import NewToDoForm from '../../components/NewToDoForm'
import styled from 'styled-components'

const Container = styled.div`
    background: #D9391C;
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    padding: 16px;
    border-radius: 16px;
    margin-top: 16px;
`

const Header = styled.h1`
    color: #FFBF47;
`

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
            <Container>
                <Header>{title}</Header>
                {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
                <NewToDoForm
                    onSubmit={this.addNewTask}
                    onChange={this.updateDraft}
                    draft={draft}
                />
            </Container>
        )
    }
}

export default ToDoList