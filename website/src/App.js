import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import RoomContainer from './components/room_container'
import Home from './components/Home'
import Profile from './components/profile'
import Landing from './components/landing'
function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/classroom/:id" component={RoomContainer}/>
        <Route path="/profile" component={Profile}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
