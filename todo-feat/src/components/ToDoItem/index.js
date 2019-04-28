import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    color: #D9391C;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
        color: #ddd;
    }
`

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

    //--- From children to parent
    toggleDone = () => this.props.toggleDone(this.props.id)
    destroy = () => this.props.destroy(this.props.id)

    render() {
        const { id, text, done } = this.props

        return (
            <Item done={done}>
                <div onClick={this.toggleDone}>{ text }</div>
                <button onClick={this.destroy}>x</button>
                <StyledLink to={`todo_items/${id}`}>edit</StyledLink>
            </Item>
        )
    }
}

export default ToDoItem