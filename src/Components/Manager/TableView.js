import React, { useContext, useEffect } from 'react';
import { TableContext } from './Context/TableContext';
import { EmployeeProvider } from './Context/EmployeeContext';
import AllEmployees from './Tables/AllEmployees';
import AllPending from './Tables/AllPending';
import AllResolved from './Tables/AllResolved';
import EmployeeRequests from './Tables/EmployeeRequests';

function TableView() {
    const [table, setTable] = useContext(TableContext);

    return (
        <EmployeeProvider>
            {
                table === 'employees' ? <AllEmployees /> :
                    table === 'employee' ? <EmployeeRequests /> :
                        table === 'pending' ? <AllPending /> :
                            table === 'resolved' ? <AllResolved /> :
                                null
            }
        </EmployeeProvider>
    );
}

export default TableView;