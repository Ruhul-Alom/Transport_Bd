
import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import background from'./images/background.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import NavbarAll from './component/Navbar/NavbarAll';
import SelectRoad from './component/SelectRoad/SelectRoad';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import './Responsive.css';
import Transport from './component/TransportInfo/Transport';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
  
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <div className="App" style={{ backgroundImage: `url(${background})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
        
        <Router>
          <NavbarAll user={loggedInUser}></NavbarAll>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <PrivateRoute path="/selectroad">
              <SelectRoad></SelectRoad>
            </PrivateRoute>
            <Route path="/transport">
              <Transport></Transport>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>    
  );
}

export default App;
