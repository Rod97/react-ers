import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import ResolveRequest from "../ResolveRequest";
function EmployeeRequests() {
    const [requests, setRequests] = useState([]);
    const [employee, setEmployee] = useContext(EmployeeContext);

    useEffect(() => {
        (async () => {
            const fetchRequests = await fetch(`https://ers-node.herokuapp.com/manager/employee/${employee}`);
            const employeeRequests = await fetchRequests.json();
            setRequests(employeeRequests.data);
        })();
    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <th>Request ID</th>
                    <th>Amount Requested</th>
                    <th>Reason</th>
                    <th>Employee Requesting</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    requests.map(request => (
                        <tr key={request._id}>
                            <td>{request._id}</td>
                            <td>{request.amount}</td>
                            <td>{request.reason}</td>
                            <td>{request.employee_id}</td>
                            <td>{request.status}</td>
                            <ResolveRequest requestId={request._id} status={request.status === 'Pending'?true:false}/>
                        </tr>
                    ))
                }
            </tbody>
        </table >
    )
}

export default EmployeeRequests;