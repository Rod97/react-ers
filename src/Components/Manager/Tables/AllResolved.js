import { useEffect, useState } from "react";

function AllResolved() {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        (async () => {
            const fetchRequests = await fetch(`https://ers-node.herokuapp.com/manager/resolved`);
            const requests = await fetchRequests.json();
            setRequests(requests.data);
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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default AllResolved;