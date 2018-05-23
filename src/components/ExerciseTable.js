import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {PageHeader} from 'react-bootstrap';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

import AuthService from './AuthService';

class ExerciseTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
        }

        this.Auth = new AuthService();
        this.onDeleteRow = this.onDeleteRow.bind(this);
        this.format = this.format.bind(this);

    }

    componentWillMount(){
        this.Auth.getAllExercise().then(result => this.setState({
            data: result.data
        }))
        
        
    }
        
    

    render() {
        return (
            
            <div>
                <PageHeader className="table-header">Exercise Table</PageHeader>
                <BootstrapTable data={this.state.data}
                 pagination={true}
                 selectRow={{mode: 'checkbox'}}
                 deleteRow={true}
                 exportCSV
                 csvFileName='userData.csv'
                 options={{ afterDeleteRow: this.onDeleteRow}}>
                    <TableHeaderColumn isKey dataField='id' width="70" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='distance'width="100" dataSort={true}>Distance</TableHeaderColumn> 
                    <TableHeaderColumn dataField='method' width="70" dataSort={true}>Method</TableHeaderColumn>
                    <TableHeaderColumn dataField='dayEntered' dataSort={true}>Day Entered</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataFormat={this.format} dataSort={true}>Entered By</TableHeaderColumn>
                </BootstrapTable>
                
            </div>
        )
    }

    onDeleteRow(rowKeys) {
        alert("You deleted exercises: " + rowKeys);
        let length = rowKeys.length;
        for (let i = 0; i<length; i++) {
            this.Auth.deleteExercise(rowKeys[i]);
        }
        
    }

    format(cell, row){
        const user = row.user.name + ", " + row.user.email
        return user
    }

}




export default ExerciseTable;