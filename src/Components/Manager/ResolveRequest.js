import React, { useContext, useState } from 'react';
import { AllPendingContext } from './Context/AllPendingContext';

function ResolveRequest({ requestId, status }) {
    const { update } = useContext(AllPendingContext)
    const [pending, setPending] = useState(status)
    const [updatePending, setUpdatePending] = update
    const accept = async () => {
        const status = await sendDecision('Accepted');
        if ( status === 200) {
            console.log("accepted, setting pending false");
            setPending(false);
            setUpdatePending(true);
        }
    }
    const reject = async () => {
        const status = await sendDecision('Rejected');
        if (status === 200) {
            console.log("rejected, setting pending false");
            setPending(false);
            setUpdatePending(true);
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
                        <button className='decider' onClick={accept}>Accept</button>
                        <button className='decider' onClick={reject}> Reject</button >
                    </td> : <td></td>
            }
        </>

    );
}

export default ResolveRequest;