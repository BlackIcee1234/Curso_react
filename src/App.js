import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: {firstname: 'Axel', lastname: 'Perez'}
    }
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}</p>
          <button onClick={() => {
          this.setState((state, props) => {
            return{
              name: {firstname: 'Andree', lastname: 'Reyes'}
            }
          }, ()=>{
            console.log(this.state);
          });
         }}
         >
          Change Name
         </button>

        </header>
      </div>
    );
  }
}

export default App;
