import './App.css';
import Home from './Home/Home';
import Navbar from './nav/navbar';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Old from './old/Old';
import About from './About/About';
import Contact from './Contact/Contact';
import PageOne from './PageOne/PageOne';

function App() {
  
  return (

    <div className="App">
            <Router>
              <Navbar/>
                <Switch>
                    <Route exact path="/" exact component={Home}></Route>
                    <Route exact path="/old" exact component={Old}></Route>
                    <Route exact path="/about" exact component={About}></Route>
                    <Route exact path="/contact" exact component={Contact}></Route>
                </Switch>
            </Router>
    </div>
  );
}

export default App;
