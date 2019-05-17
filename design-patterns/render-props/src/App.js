import React, { useEffect, useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <HiWorld>
        {
          ({ changeName, name }) => (
            <HiYou changeName={changeName} name={name} />
          )
        }
      </HiWorld> 
    </div>
  );
}

class HiWorld extends Component {
  state = {
    name: 'Marek'
  }

  changeName = () => {
    this.setState({
      name: this.state.name === 'Marek' ? 'Artur' : 'Marek'
    })
  }

  render() {
    const { name } = this.state

    return this.props.children({ name, changeName: this.changeName })
  }
}

class HiYou extends Component {

  render() {
    return (
      <div>
        <p onClick={this.props.changeName}>{`Hi, ${this.props.name}`}</p>        
      </div>
    )
  }
}

export default App;
