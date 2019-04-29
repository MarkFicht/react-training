import React, { Component } from 'react'
import styled from 'styled-components'

import ToDoItem from '../../components/ToDoItem'
import NewToDoForm from '../../components/NewToDoForm'

import * as toDoItemApi from '../../helpers/toDoItemApi'
import * as _ from 'ramda' /**   => https://ramdajs.com/docs/   */

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
        // console.log(tasks)
        this.setState({ tasks })

        //--- Wersja bez 'async ()' & 'await' ---//
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

    addNewTask = async () => {
        const { tasks, draft } = this.state;

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

    toggleDone = async (id) => {
        const { tasks } = this.state
        const { index, task } = this.findById(id, tasks)

        const response = await toDoItemApi.update(id, { done: !task.done, content: task.content, key: task.key })

        this.setState({tasks: _.update(index, response, tasks)})
    }

    render() {
        const { tasks, draft } = this.state;
        const { title } = this.props;

        return (
            <div>
                <Header>{title}</Header>
                <DestroyButton onClick={ this.removeAll }>Remove all</DestroyButton>
                {tasks.map(task => 
                    <ToDoItem 
                        id={task.id} 
                        key={task.key} 
                        text={task.content} 
                        done={task.done}
                        destroy={this.destroyTask} 
                        toggleDone={this.toggleDone} />
                )}
                <NewToDoForm
                    onSubmit={this.addNewTask}
                    onChange={this.updateDraft}
                    draft={draft}
                />
            </div>
        )
    }
}

export default ToDoList