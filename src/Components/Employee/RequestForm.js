import React, { useContext, useState } from 'react';
import { PendingContext } from './Context/PendingContext';
import { EmployeeContext } from './Context/EmployeeContext';

function RequestForm() {
    const employeeContext = useContext(EmployeeContext);
    const pendingContext = useContext(PendingContext);
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');
    const [result, setResult] = useState('');
    const [update, setUpdate] = pendingContext.update;
    const [employee, setEmployee] = employeeContext.employee;
    const updateAmount = (e) => {
        setAmount(e.target.value);
    }
    const updateReason = (e) => {
        setReason(e.target.value);
    }
    const addRequest = async e => {
        e.preventDefault();
        const sendRequest = await fetch(`https://ers-node.herokuapp.com/employee/request`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                reason,
                employee_id: employee,
                status: 'Pending'
            })
        })
        if (sendRequest.status === 200) {
            setResult('Success! Your request was submitted.')
            setUpdate(true)

        } else {
            setResult('Unable to submit your request.')
        }
        setAmount('');
        setReason('');
    }

    return (
        <>
            <form onSubmit={addRequest}>
                <input type="text" name={amount} value={amount} onChange={updateAmount} placeholder='Amount' />
                <input type="text" name={reason} value={reason} onChange={updateReason} placeholder='Reason' />
                <button>Submit</button>
            </form>
            <p>{result}</p>
        </>
    );
}

export default RequestForm;