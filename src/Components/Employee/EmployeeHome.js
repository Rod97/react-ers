import React, { useEffect, useState } from 'react';
import RequestForm from './RequestForm';

function EmployeeHome() {
    useEffect(() => {
        fetchEmployees();
    }, [])

    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState("");
    const [showForm, setShowForm] = useState(false)
    const [formButton, setFormButton] = useState("New Request")


    const changeEmployee = e => {
        setEmployee(e.target.value);
    }
    const fetchEmployees = async () => {
        const data = await fetch(`https://ers-node.herokuapp.com/manager/employees`);
        const employees = await data.json();
        setEmployees(employees.data);
    }
    const toggleForm = () => {
        setShowForm(!showForm);
        toggleButton();
    }
    const toggleButton = () => {
        if (!showForm) {
            setFormButton("Cancel")
        } else {
            setFormButton("New Request")
        }
    }
    return (
        <div>
            <h1>Employee Home</h1>
            <div className='employee-home'>
                <select defaultValue={employee} onChange={changeEmployee}>
                    <option value="" disabled>Select Employee</option>
                    {employees.map(employee => (
                        <option value={employee._id} key={employee._id}>{employee.first_name} {employee.last_name}</option>
                    ))}
                </select>
                <div>
                    <button onClick={toggleForm}>{formButton}</button>
                    {showForm ? <RequestForm employee={employee} /> : null}
                </div>
            </div>
        </div>
    );
}

export default EmployeeHome;