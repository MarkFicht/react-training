import React, { Component } from 'react'

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
            <div onClick={this.toggleDone} className={done ? 'doneToDo' : ''}>
                <p>{text}</p>
            </div>
        )
    }
}

export default ToDoItem