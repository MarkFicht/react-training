import React, { Component, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const NotFound = ({ location }) => {
    const [counter, setCounter] = useState(3)
    // const [intervalId, setIntervalId] = useState()
    const countdown = () => setCounter(counter - 1)

    useEffect(() => {
        // console.log('cDM or cDU')

        // Bad
        // const intevral = setInterval(countdown, 1000)

        // good
        // const intevral = setInterval(countdown, 1000)
        // setIntervalId(intevral)

        // return () => {
        //     console.log('cWU')
        //     clearInterval(intevral)
        // }

        const id = setTimeout(countdown, 1000)

        return () => clearTimeout(id)

    }, [counter]) // condition when re-render

    return (
        <div>
            <p>No match for <code>{location.pathname}</code></p>
            <p>Redirect to home in: {counter}</p>
            {counter === 0 && <Redirect to='/' />}
        </div>
    )

}

// class NotFound extends Component {
//     state = {
//         counter: 3
//     }

//     componentDidMount = () => {

//         const intervalId = setInterval(this.countdown, 1000)

//         this.setState({ intervalId })
//     }

//     countdown = () => this.setState({ counter: this.state.counter - 1 })

//     componentWillUnmount = () => clearInterval(this.state.intervalId)

//     render() {
//         const { location } = this.props
//         const { counter } = this.state

//         return (
//             <div>
//                 <p>No match for <code>{location.pathname}</code></p>
//                 <p>Redirect to home in: {counter}</p>
//                 {counter === 0 && <Redirect to='/' />}
//             </div>
//         )
//     }
// }

export default NotFound