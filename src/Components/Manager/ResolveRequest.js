import React, { useState } from 'react';

function ResolveRequest({ requestId, status }) {
    const [pending, setPending] = useState(status)
    const accept = async () => {
        const status = await sendDecision('Accepted');
        console.log("response status",status);
        if ( status === 200) {
            console.log("accepted, setting pending false");
            setPending(false);
        }
    }
    const reject = async () => {
        const status = await sendDecision('Rejected');
        console.log("response status",status);
        if (status === 200) {
            console.log("rejected, setting pending false");
            setPending(false);
        }
    }
    const sendDecision = async (decision) => {
        const sendRequest = await fetch(`https://ers-node.herokuapp.com/manager/manage`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reimbursement: requestId,
                decision: decision
            })
        })

        return sendRequest.status;
    }
    return (
        <>
            {console.log(pending)}
            {
                pending ?
                    <td>
                        <button onClick={accept}>Accept</button>
                        <button onClick={reject}> Reject</button >
                    </td> : null
            }
        </>

    );
}

export default ResolveRequest;