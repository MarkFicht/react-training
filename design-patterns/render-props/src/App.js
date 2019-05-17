import React, { useEffect, useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <HiWorld /> 
    </div>
  );
}

const HiWorld = () => {
  const [name, setName] = useState('Marek')

  const changeName = () => {
    name === 'Marek' ? setName('Artur') : setName('Marek')
    // console.log('click')
  }

  return (
    <div className="App">
      <HiYou changeName={changeName} name={name} />
    </div>
  )

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
