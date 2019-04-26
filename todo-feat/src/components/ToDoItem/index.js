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

const url = `http://localhost:4000/todo_items`;

class ToDoItem extends Component {

    static defaultProps = {
        done: false
    }

    state = {
        done: this.props.done
    }

    /**
     * W 'json-server' wysyłam wszystkie atrybuty w body. (np. w api w Railsach, przy PUT mogę zmieniać tylko te atrybuty, co wysyłam).
     */
    toggleDone = () => {
        // this.setState({ done: !this.state.done })

        fetch(`${url}/${this.props.id}`, {
            method: 'PUT',
            headers: {
                "Content-type": 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                done: !this.state.done,
                content: this.props.text,
                key: this.props.text
            })
        }).then(res => {
            if ( res.ok ) {
                this.setState({done: !this.state.done})
            }
        })
    }

    //--- From children to parent
    destroy = () => this.props.destroy(this.props.id)

    render() {
        const { text } = this.props
        const { done } = this.state

        return (
            <Item done={ done }>
                <div>{text}</div>
                <button onClick={this.destroy}>x</button>
            </Item>
        )
    }
}

export default ToDoItem