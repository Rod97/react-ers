import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
    const [employee, setEmployee]= useState('');

    return (
        <EmployeeContext.Provider value={[employee, setEmployee]}>
            {props.children}
        </EmployeeContext.Provider>
    );
}