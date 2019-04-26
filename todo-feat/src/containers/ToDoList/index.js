import React, { Component } from 'react'
import styled from 'styled-components'

import ToDoItem from '../../components/ToDoItem'
import NewToDoForm from '../../components/NewToDoForm'

import * as toDoItemApi from '../../helpers/toDoItemApi'
import * as _ from 'ramda'

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

    /** https://ramdajs.com/docs/ */
    addNewTask = async () => {
        const { tasks, draft } = this.state;

        // const list = tasks
        // list.push({ text: draft, done: false })

        const task = await toDoItemApi.create({ done: false, content: draft, key: draft })

        this.setState({
            tasks: _.append(task, tasks),
            draft: ''
        })
    }

    removeAll = () => {
        this.setState({ tasks: [] })
    }

    findById = (id, arr) => {
        const index = _.findIndex(_.propEq('id', id))(arr)
        
        return { index, task: arr[index] }
    }

    destroyTask = async (id) => {
        const { tasks } = this.state
        await toDoItemApi.destroy(id)

        const { index } = this.findById(id, tasks)

        this.setState({tasks: _.remove(index, 1, tasks)})
    }

    render() {
        const { tasks, draft } = this.state;
        const { title } = this.props;

        return (
            <Container>
                <Header>{title}</Header>
                <DestroyButton onClick={ this.removeAll }>Remove all</DestroyButton>
                {tasks.map(task => 
                    <ToDoItem 
                        id={task.id} 
                        key={task.key} 
                        text={task.content} 
                        done={task.done}
                        destroy={this.destroyTask} />
                )}
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