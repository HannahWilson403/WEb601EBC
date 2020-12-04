//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Maps from './Components/Maps';
import News from './Components/New';
import Tracks from './Components/Tracks';
import Hub from './Components/Hub'; 
import Login from './Components/Login';
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router basename="/~hannahmarie-wilson/client" className="App">
      <Header/>
        
      <nav>
            <ul>
              <li><Link to="/">Hub</Link></li>
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/Tracks">Tracks</Link></li>
              <li><Link to="/Maps">Maps</Link></li>
              <li><Link to="/News">News</Link></li>
            </ul>

      </nav>
      
      <Switch>
        <Route exact path="/" component={Hub}/>
        <Route exact path="/Tracks" component={Tracks}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Maps" component={Maps}/>
        <Route exact path="/News" component={News}/>
        <Route path="/" component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
