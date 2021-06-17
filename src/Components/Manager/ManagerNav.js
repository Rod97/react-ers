import { useContext } from 'react';
import { EmployeeContext } from './Context/EmployeeContext';
import { TableContext } from './Context/TableContext';

function ManagerNav() {
    const [table, setTable] = useContext(TableContext);
    const employees = () => {
        setTable('employees');
    }
    const pending = () => {
        setTable('pending');
    }
    const resolved = () => {
        setTable('resolved');
    }
    return (
        <>
            <button onClick={employees}>All Employees</button>
            <button onClick={pending}>All Pending</button>
            <button onClick={resolved}>All Resolved</button>
        </>
    );
}

export default ManagerNav;