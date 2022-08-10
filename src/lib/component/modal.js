import React from 'react';
import './modal.css'

const Modal = ({closeModal,label,stylesForModal})=>{
    

    return(
        <div className='modal-container'>
                <div className='modal'>
                   <div className='modal-header'>
                        <button className='btn-close-modal' onClick={closeModal}>X</button>
                   </div>
                   <div className='modal-content'>
                        <p>{label}</p>
                   </div>
                </div>
        </div>
    )
}

export default Modal