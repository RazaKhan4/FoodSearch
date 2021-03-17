import React from 'react';
import Login from './components/Login';
import Main from './components/Main';
import Error from './components/Error';
import {Route, Switch,Redirect, Link} from 'react-router-dom';


const App=()=>{

 return(
   <>
   <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/main" component={Main} />
            <Route component={Error} />
            <Redirect to='/' />
            

   </Switch> 
   </>
 );
}
export default App;
