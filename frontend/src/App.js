import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import  { Login } from './login/login-component';
import { Home } from './home/home-component';
import { history } from './_helpers';
import { PrivateRoute } from './_components';
import { Vendor } from './vendors/vendor-component';
import { AddVendor } from './vendors/addvendor-component'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
       return (
           <div className="App">
               <Router history={history}>
                    <div>
                        <Switch>
                            <PrivateRoute exact path='/home' component={Home} />
                            <PrivateRoute exact path='/vendor' component={Vendor}/>
                            <Route exact path='/' component={Login} />
                            <PrivateRoute exact path='/add-vendor' component={AddVendor}/>
                            <PrivateRoute exct path='/edit-vendor/:id' component={AddVendor}/>
                        </Switch>
                    </div>
               </Router>
           </div>
        );
     }
}

export default App;
