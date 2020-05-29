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
  
export default function CuatroC() {

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
  

    return (
        <div>
        <div className="p-0" style={{ width: `18rem` }}>
         <div className="">
              <button onClick={openModal}>
          <img src="CAMPAÑA _2.jpg" className="img-fluid " alt="..." />
          </button>
         </div>
         </div>
         <div>
        
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal" 
        >
        <div className="modal-dialog p-0">
  
          
            <img src="4C.png" className="img-fluid" height="100px" alt=""/>
          </div>
       
        </Modal>
      </div>
        </div>
    )
}
