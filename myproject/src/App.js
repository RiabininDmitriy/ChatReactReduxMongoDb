import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from "history/createBrowserHistory";
import About from './components/About'
import AboutPage from './components/AboutPage'
import Form from './components/Form'
import Chat from './components/Chat'


let Container = props => <div className={`Contanier ${props.className}`}>
  <Form />
  <Chat />
  <About />
</div>


const history = createHistory();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Container} />
            <Route  path="/about" component={AboutPage} />
          </Switch>
        </Router>

      </Provider>
    );
  }
}

export default App;
