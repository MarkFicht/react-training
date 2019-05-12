import React, { Component } from 'react'
import './App.css'
import ToDoList from './containers/ToDoList'
import ToDoEditFrom from './components/ToDoEditForm'
import Login from './containers/Login'
import Navbar from './containers/Navbar'
import { CurrentUserProvider } from './context/CurrentUser.context'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    background: #D9391C;
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    padding: 16px;
    border-radius: 16px;
    margin-top: 16px;
`

/**
 * sessionStorage.clear() in console on home
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props =>
      sessionStorage.getItem('currentUser') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
    }
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <CurrentUserProvider>
          <Container>
            <Navbar />

            <Switch>
              <Route exact path='/' component={ToDoList} />
              <PrivateRoute exact path='/todo_items/:itemId' component={ToDoEditFrom} />
              <Route exact path='/login' component={Login} />

              <Route component={NotFound} />
            </Switch>

          </Container>
        </CurrentUserProvider>
      </Router>
    );
  }
}

export default App;
