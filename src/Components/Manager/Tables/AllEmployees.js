import React, { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from '../Context/EmployeeContext';
import { TableContext } from '../Context/TableContext';

function AllEmployees() {
    const [employees, setEmployees] = useState([]);
    const [table, setTable] = useContext(TableContext);
    const [employee, setEmployee] = useContext(EmployeeContext);

    useEffect(() => {
        (async () => {
            const data = await fetch(`https://ers-node.herokuapp.com/manager/employees`);
            const employees = await data.json();
            setEmployees(employees.data);
        })();
    }, [])
    function employeeRequests(id) {
        setTable('employee');
        setEmployee(id);
    }
    return (
        <table id="empl-req">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr onClick={()=>employeeRequests(employee._id)} key={employee._id}>
                        <td>{employee._id}</td>
                        <td>{employee.first_name} {employee.last_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AllEmployees