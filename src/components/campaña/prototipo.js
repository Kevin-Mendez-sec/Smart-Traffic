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
  

export default function Prototipo() {

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
          <img src="CAMPAÑA _3.jpg" className="img-fluid " alt="..." />
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal" 
        >
        <div className="modal-dialog p-0">
  
          
            <img src="prototipo.png" className="img-fluid" height="100px" alt=""/>
          </div>
       
        </Modal>
        </div>
    )
}
