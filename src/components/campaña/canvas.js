import React from 'react'
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  

export default function Canvas() {

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
  

    return (
        <div>
        <div className="card" style={{ width: `18rem` }}>
     
          <button onClick={openModal}>
          <img src="CAMPAÑA _6.jpg" className="img-fluid" alt="..." />
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal" 
        >
        <div className="p-0 modal-dialog">
  
          
        <div className="d-flex justify-content-center shadow-lg">

            <img src="canvas.jpeg" className="img-fluid" alt="" />
              </div>
          </div>
       
        </Modal>
        </div>
    )
}
