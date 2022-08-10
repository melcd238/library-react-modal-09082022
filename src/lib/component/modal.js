import React from 'react';
import './modal.css'

const Modal = ({closeModal,label,stylesModal})=>{
    

    return(
        <div className='modal-container'>
                <div className={`modal modal-${stylesModal}`}>
                   <div className='modal-header'>
                        <button className={`btn-close-modal btn-close-modal-${stylesModal}`} onClick={closeModal}>X</button>
                   </div>
                   <div className='modal-content'>
                        <p>{label}</p>
                   </div>
                </div>
        </div>
    )
}

export default Modal