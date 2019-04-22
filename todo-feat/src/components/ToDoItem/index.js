import React, { Component } from 'react'
import styled from 'styled-components'

const Item = styled.div`
    background: #FF836D;
    border-radius: 10px;
    padding: 8px 20px;
    margin-bottom: 8px;
    font-size: 1.5em;
    line-height: 1.5em;
    color: ${props => props.done ? 'greenyellow' : 'auto'};
    text-decoration: ${props => props.done ? 'line-through' : 'auto'};
`

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
            <Item onClick={this.toggleDone} done={ done }>
                {text}
            </Item>
        )
    }
}

export default ToDoItem