import React, { useContext } from 'react';
import { EmployeeContext } from './Context/EmployeeContext';
import { PendingContext } from './Context/PendingContext';

const EmployeeSelector = () => {
    const employeeContext = useContext(EmployeeContext);
    const pendingContext = useContext(PendingContext);
    const [employees, setEmployees] = employeeContext.employees;
    const [employee, setEmployee] = employeeContext.employee;
    const [update, setUpdate] = pendingContext.update;

    const changeEmployee = e => {
        setEmployee(e.target.value);
        setUpdate(true);
    }
    return (
        <div >
            <select defaultValue={employee} onChange={changeEmployee}>
                <option value="" disabled>Select Employee</option>
                {employees.map(employee => (
                    <option value={employee._id} key={employee._id}>{employee.first_name} {employee.last_name}</option>
                ))}
            </select>
        </div>
    );
}

export default EmployeeSelector