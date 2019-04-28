import React, { Component } from 'react'
import './App.css'
import ToDoList from './containers/ToDoList'
import ToDoEditFrom from './components/ToDoEditForm'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

class App extends Component {
  render() {
    return (
      <Router>
        <Container>

          <Switch>
            <Route exact path='/' component={ToDoList} />
            <Route exact path='/todo_items/:itemId' component={ToDoEditFrom} />

            <Route component={NotFound} />
          </Switch>

        </Container>
      </Router>
    );
  }
}

export default App;
