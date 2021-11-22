import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ReactDom from 'react-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import HomePage from './pages/homepage';
import {createStore} from 'redux'

const counterReducer = (state = 1, action)=>{
  switch(action.type){
    case'PAYMENT':
      return state = 1
    case'HISTORY':
      return state = 2
    case'DETAIL':
      return state = 3
    case'LOAN':
      return state = 4
    default:
      return state
  }
}

export const stateStorage = createStore(counterReducer)

function App() {
  return (
    <Router className="App">
        <Switch>
          <Route path='/' component = {Home} exact></Route>
          <Route path='/signin' component = {SigninPage} exact></Route>
          <Route path='/signup' component = {SignupPage} exact></Route>
          <Route path='/homepage' component = {HomePage} exact></Route>
        </Switch>
    </Router>
  );
}

const renderApp = () =>{
  ReactDom.render(<App/>,document.getElementById('root'))
}

renderApp()
stateStorage.subscribe(renderApp)
export default App;
