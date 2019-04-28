import React, { Component } from 'react'

class NotFound extends Component {
    state = {
        counter: 5
    }

    componentDidMount = () => {

        const intervalId = setInterval(this.countdown, 1000)

        this.setState({ intervalId })
    }

    countdown = () => this.setState({ counter: this.state.counter - 1 })

    componentWillUnmount = () => clearInterval(this.state.intervalId)

    render() {
        return (
            <div>
                <p>No match for <code>{this.props.location.pathname}</code></p>
                <p>Redirect to home in: {this.state.counter}</p>
            </div>
        )
    }
}

export default NotFound