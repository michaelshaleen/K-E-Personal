import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';
import Landing from '../LandingPage/Landing';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';



function App() {
  return (
    <Router>
      <Switch>

      <Route path="/" exact component={Landing} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/education" exact component={Education} />



      </Switch>
    </Router>
    
  );
}

export default App;
