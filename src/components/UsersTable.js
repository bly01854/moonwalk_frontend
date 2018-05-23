import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {PageHeader} from 'react-bootstrap';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

import AuthService from './AuthService';

class UsersTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
        }

        this.Auth = new AuthService();
        this.onDeleteRow = this.onDeleteRow.bind(this);

    }

    componentWillMount(){
        this.Auth.getAllUsers().then(result => this.setState({
            data: result.data
        })).then(console.log(this.state.data))
        
    }
        
    

    render() {
        return (
            <div>
                <PageHeader className="table-header">Users Table</PageHeader>
                <BootstrapTable data={this.state.data}
                 pagination={true}
                 selectRow={{mode: 'checkbox'}}
                 deleteRow={true}
                 exportCSV
                 csvFileName='userData.csv'
                 options={{ afterDeleteRow: this.onDeleteRow}}>
                    <TableHeaderColumn isKey dataField='id' width="70" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn> 
                    <TableHeaderColumn dataField='email' dataSort={true}>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='gender' width="70" dataSort={true}>Gender</TableHeaderColumn>
                    <TableHeaderColumn dataField='birthDate' dataSort={true}>Birth Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='county' dataSort={true}>County</TableHeaderColumn>
                    <TableHeaderColumn dataField='totalDistance' dataSort={true}>Distance Traveled</TableHeaderColumn>
                </BootstrapTable>
                
            </div>
        )
    }

    onDeleteRow(rowKeys) {
        alert("You deleted users: " + rowKeys);
        let length = rowKeys.length;
        for (let i = 0; i<length; i++) {
            this.Auth.deleteUser(rowKeys[i]);
        }
        
    }

}



export default UsersTable;