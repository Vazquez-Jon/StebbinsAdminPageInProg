import React, { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from './firebase';

const reserveStatusDBPath = 'ReserveStatus/ReserveStatus';

const UpdateStatusField = () => {
    const [newReserveStatus, setNewReserveStatus] = useState('');

    const UpdateReserveStatus = () => {
        const ReserveStatusDocRef = doc(firestore, reserveStatusDBPath);
        const docData = {
            StatusString: newReserveStatus,
        };
        updateDoc(ReserveStatusDocRef, docData)
        .then( () => {
            console.log("Update success\n")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    return (
        <>
            <div>
                <div>
                    <label>
                        New Reserve Status
                    </label>
                    <input 
                        name="ReserveStatusInput"
                        type='text'
                        onChange={(e)=>setNewReserveStatus(e.target.value)} 
                        />
                </div>
                <div>
                    <button onClick={UpdateReserveStatus}>
                        Update!
                    </button>
                </div>
            </div>

        </>
    )
}

export default UpdateStatusField;