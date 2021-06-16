import React, { useState, createContext, useEffect } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState("");
    useEffect(() => {
        (async () => {
            const data = await fetch(`https://ers-node.herokuapp.com/manager/employees`);
            const employees = await data.json();
            setEmployees(employees.data);
        })();
    }, [])

    return (
        <EmployeeContext.Provider value={{ employees: [employees, setEmployees], employee: [employee, setEmployee] }}>
            {props.children}
        </EmployeeContext.Provider>
    );

}