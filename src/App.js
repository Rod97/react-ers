import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EmployeeHome from './Components/Employee/EmployeeHome';
import ManagerHome from './Components/Manager/ManagerHome';
import Nav from './Components/NavBar/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact/>
          <Route path="/employees" component={EmployeeHome}/>
          <Route path="/manager" component={ManagerHome}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
