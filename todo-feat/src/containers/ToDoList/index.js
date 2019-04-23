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

const DestroyButton = styled.button`
    border-radius: 10px;
    background: red;
    padding: 5px;
    color: white;
    margin-bottom: 10px;
`

/**
 * json-server --watch db.json --port 4000
 */
const url = `http://localhost:4000/todo_items`;

class ToDoList extends Component {
    
    componentDidMount = () => {
        fetch( url )
            .then( res => res.json() )
            .then( json => this.setState({tasks: json}) )
    }

    static defaultProps = {
        tasks: [],
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

    removeAll = () => {
        this.setState({ tasks: [] })
    }

    render() {
        const { tasks, draft } = this.state;
        const { title } = this.props;

        return (
            <Container>
                <Header>{title}</Header>
                <DestroyButton onClick={ this.removeAll }>Remove all</DestroyButton>
                {tasks.map(task => <ToDoItem id={task.id} key={task.key} text={task.content} done={task.done} />)}
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