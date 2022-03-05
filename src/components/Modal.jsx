import React, { useEffect } from 'react'
import CloseIcon from '../assets/close.svg'

export const Modal = ({
    showModal,
    handleClose,
    title,
    children,

}) => {
    
    useEffect(() => {
      
    }, [])

  return (
      <>
      {
          showModal && (
            <div className='modal'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>{title}</h4>
                        <img onClick={handleClose} src={CloseIcon} alt="" />
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                   
                </div>
            </div>
          )
      }
      </>
  )
}
