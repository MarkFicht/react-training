import React, { Component } from "react";
import { SubmitButton } from '../../helpers/theme'

/**
 * https://developers.facebook.com/apps/
 * https://developers.facebook.com/docs/facebook-login/web
 */

class Login extends Component {

    state = {
        processing: false,
        currentUser: null
    }

    fbLogin = () => {
        this.setState({ processing: true })
        window.FB.getLoginStatus(response => {
            // console.log(response)

            if (response.status !== 'connected') {
                window.FB.login()
            } else {
                window.FB.api('/me', user => {
                    // console.log(user)
                    this.setState({processing: false, currentUser: user})
                })
            }
        })
    }

    render() {

        const { currentUser, processing } = this.state

        return(
            <div>
                {currentUser
                    ? <div>Hi, {currentUser.name}</div>
                    : <p>You must login to view page</p>
                }
                {processing
                    ? <div>Authenticating...</div>
                    : <SubmitButton onClick={this.fbLogin}>FaceBook login</SubmitButton>

                }
            </div>
        )
    }
}

export default Login