import React, { Component } from 'react'
import styled from 'styled-components'

import ToDoItem from '../../components/ToDoItem'
import NewToDoForm from '../../components/NewToDoForm'

import * as toDoItemApi from '../../helpers/toDoItemApi'

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

class ToDoList extends Component {
    
    componentDidMount = async () => {
        const tasks = await toDoItemApi.getAll()
        console.log(tasks)
        this.setState({ tasks })

        // fetch( `http://localhost:4000/todo_items` )
        //     .then( res => res.json() )
        //     .then( json => this.setState({tasks: json}) )

        //--- Wersja bez async await ---//
        // toDoItemApi.getAll()
        //     .then( r=> ... )
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
                { tasks.map(task => <ToDoItem id={task.id} key={task.key} text={task.content} done={task.done} />) }
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