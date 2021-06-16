import React, { useState, createContext, useEffect, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

export const PendingContext = createContext();

export const PendingProvider = (props) => {
    const context = useContext(EmployeeContext);
    const [employee, setEmployee] = context.employee;
    const [update, setUpdate] = useState(true);
    const [pending, setPending] = useState([]);
    useEffect(() => {
        if (employee && update) {
            (async () => {

                const getPending = await fetch(`https://ers-node.herokuapp.com/employee/pending/${employee}`);
                const results = await getPending.json();
                setPending(results.data);
            })();
            setUpdate(false);
        }
    }, [employee, update])


    return (
        <PendingContext.Provider value={{ pending: [pending, setPending], update: [update, setUpdate] }}>
            {props.children}
        </PendingContext.Provider>
    )
}