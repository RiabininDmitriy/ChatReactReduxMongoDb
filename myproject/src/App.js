import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Chat from './components/Chat'
import { Provider } from 'react-redux'
import store from './store'


let Contanier = props => <div className={`Contanier ${props.className}`}>{props.children}</div>

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Contanier className="App">
          <Form />
          <Chat />
        </Contanier>
      </Provider>
    );
  }
}

export default App;
