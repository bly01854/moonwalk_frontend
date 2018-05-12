import React, {Component} from 'react';

import UsersTable from './UsersTable';
import AuthService from './AuthService';

class Admin extends Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <UsersTable/>
            </div>
        )
    }




}

export default Admin;