import React, { useContext, useState } from 'react';
import { EmployeeContext } from './Context/EmployeeContext';
import EmployeePending from './Tables/EmployeePending';
import EmployeeResolved from './Tables/EmployeeResolved';

function ViewRequests() {
    const employeeContext = useContext(EmployeeContext);
    const [showPending, setShowPending] = useState(true);
    const [employee, setEmployee] = employeeContext.employee;

    const toPending = () => {
        setShowPending(true);
    }
    const toResolved = () => {
        setShowPending(false);
    }
    return (employee ?( 
        <>
            <button onClick={toPending}>Pending</button>
            <button onClick={toResolved}>Resolved</button>
            <div>
                {showPending ? <EmployeePending employee={employee} /> : <EmployeeResolved employee={employee} />}
            </div>
        </>):null
    );
}

export default ViewRequests;