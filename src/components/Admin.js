import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import UsersTable from './UsersTable';
import ExerciseTable from './ExerciseTable';
import AuthService from './AuthService';

import AdminNavbar from './AdminNavbar';

class Admin extends Component{
    constructor(props){
        super(props);


        this.Auth = new AuthService();
    }


    render() {
        if(!this.Auth.getProfile().admin){
            return <Redirect to='/'/>
        }
        if(!this.Auth.loggedIn){
            return <Redirect to='/'/>
        }
        return (
            <BrowserRouter>
            <div className="App">
                <AdminNavbar/>
                <Switch>
                    <Route path="/admin/usertable" component={UsersTable}/>
                    <Route path="/admin/exercisetable" component={ExerciseTable}/>
                </Switch>
            </div>
            </BrowserRouter>
        )
    }

}

export default Admin;