import React, { Component } from 'react'

class ToDoEditFrom extends Component {

    render() {
        return(
            <div>
                Edit form for {this.props.match.params.itemId}
            </div>
        )
    }
}

export default ToDoEditFrom