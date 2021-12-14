import './App.css';
import Home from './components/LandingPage/Home'
import NotFound from './components/NotFound/NotFound';
import ParticularDevice from './components/ParticularDevice/ParticularDevice';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'

function App() {
  
  return <Router>

          <Switch> 
           <Route exact path ="/" component={Home}></Route>
           <Route exact path="/device/:serialNo/:deviceNo" component={ParticularDevice} ></Route>
           <Route component={NotFound}></Route>
          </Switch>

         </Router>          
  
}

export default App;
