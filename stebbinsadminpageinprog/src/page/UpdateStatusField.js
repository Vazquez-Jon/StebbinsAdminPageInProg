import React, { useState, useRef } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from '../firebase';
import '../pageCSS/UpdateStatusField.css'

const reserveStatusDBPath = 'ReserveStatus/ReserveStatus';

const UpdateStatusField = () => {
    const [newReserveStatus, setNewReserveStatus] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [updateFail, setUpdateFail] = useState(false);

    const UpdateReserveStatus = () => {
        const ReserveStatusDocRef = doc(firestore, reserveStatusDBPath);
        const docData = {
            StatusString: newReserveStatus,
        };
        updateDoc(ReserveStatusDocRef, docData)
        .then( () => {
            console.log("Update success\n")
            setUpdateSuccess(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setUpdateFail(true);
        });
    }

    return (
        <div className='mainContainerUpdateFieldStatus'>
                <label>
                    New Reserve Status
                </label>
                <textarea 
                    name="ReserveStatusInput"
                    type='text'
                    onChange={(e)=> {
                        setNewReserveStatus(e.target.value);
                        setUpdateSuccess(false);
                        setUpdateFail(false);
                    }}
                    className='anUpdateFieldInput'
                    rows={4}
                    cols={40}
                />
                <button 
                onClick={UpdateReserveStatus}
                className='buttonUpdateStatus'
                >
                    Update!
                </button>
                {updateSuccess && <p className='updateSuccessP'>Update Succesful!</p>}
                {updateFail && <p className='updateFailP'>Update Failed!</p>}
        </div>
    )
}

export default UpdateStatusField;