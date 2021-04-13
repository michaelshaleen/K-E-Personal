import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';
import Landing from '../LandingPage/Landing';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Bio from '../Bio/Bio';
import Nav from '../Nav/Nav';



function App() {
  return (
    <Router>
      <Switch>

      <Route path="/" exact component={Landing} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/education" exact component={Education} />
      <Route path="/bio" exact component={Bio} />


      



      </Switch>
    </Router>
    
  );
}

export default App;
