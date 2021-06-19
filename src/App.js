import './App.css';
import Home from './Home/Home';
import Navbar from './nav/navbar';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Old from './old/Old';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  
  return (

    <div className="App">
            <Router>
              <Navbar/>
                <Switch>
                    <Route exact path="/"  component={Home}></Route>
                    <Route exact path="/old"  component={Old}></Route>
                    <Route exact path="/about"  component={About}></Route>
                    <Route exact path="/contact"  component={Contact}></Route>
                </Switch>
            </Router>
    </div>
  );
}

export default App;
