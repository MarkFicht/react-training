import React, { Component } from "react";
import { SubmitButton } from '../../helpers/theme'
import { Redirect } from 'react-router-dom'
import { CurrentUserConsumer } from '../../context/CurrentUser.context'

/**
 * https://developers.facebook.com/apps/
 * https://developers.facebook.com/docs/facebook-login/web
 */

class Login extends Component {

    // state = {
    //     processing: false,
    //     currentUser: null,
    //     finished: false
    // }

    // fbLogin = () => {
    //     this.setState({ processing: true })
    //     window.FB.getLoginStatus(response => {
    //         // console.log(response)

    //         if (response.status !== 'connected') {
    //             window.FB.login()
    //         } else {
    //             window.FB.api('/me', user => {
    //                 // console.log(user)
    //                 sessionStorage.setItem('currentUser', user)
    //                 this.setState({finished: true, processing: false, currentUser: user})
    //             })
    //         }
    //     })
    // }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        return(
            <CurrentUserConsumer>
                {({user, login, processing}) => (
                    <div>
                        {user && <Redirect to={from}/>}
                        <p>You must login to view page at {from.pathname}</p>
                        {processing
                            ? <div>Authenticating...</div>
                            : <SubmitButton onClick={login}>FaceBook login</SubmitButton>

                        }
                    </div>
                )}
            </CurrentUserConsumer>
        )
    }
}

export default Login