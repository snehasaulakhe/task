import React, { Component } from 'react';
import database from './firebase';


class EmployeeData extends Component {
    constructor() {
        super();
        this.state = {
            employees: [],
        };
    }

    componentDidMount() {
        // Fetch employee data from Firebase
        const employeesRef = database.ref('employees');
        employeesRef.limitToFirst(15).on('value', (snapshot) => {
            const employees = snapshot.val();
            if (employees) {
                const employeeList = Object.values(employees);
                this.setState({ employees: employeeList });
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Employee Data</h1>
                <ul>
                    {this.state.employees.map((employee, index) => (
                        <li key={index}>
                            Name: {employee.name}, Age: {employee.age}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default EmployeeData;
