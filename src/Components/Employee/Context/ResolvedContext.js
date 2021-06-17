import React, { useState, createContext, useEffect, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

export const ResolvedContext = createContext();

export const ResolvedProvider = (props) => {
    const context = useContext(EmployeeContext);
    const [employee, setEmployee] = context.employee;
    const [resolved, setResolved] = useState([]);
    useEffect(() => {
        (async () => {
            const getPending = await fetch(`https://ers-node.herokuapp.com/employee/resolved/${employee}`);
            const results = await getPending.json();
            setResolved(results.data);
        })();
    }, [employee])


    return (
        <ResolvedContext.Provider value={[resolved, setResolved]}>
            {props.children}
        </ResolvedContext.Provider>
    )
}