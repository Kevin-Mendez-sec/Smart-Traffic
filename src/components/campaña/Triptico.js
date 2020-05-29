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
  

export default function Triptico() {

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
          <img src="CAMPAÑA _5.jpg" className="img-fluid " alt="..." />
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal" 
        >
        <div className=" p-0">
  
        <div className="d-flex justify-content-center">
                <div>
                  <img src="TRIP_1.png" className=" shadow-lg img-fluid m-3" alt="" />
                </div>
                <br />
                <div>
                  <img src="TRIP_2.png" className=" shadow-lg img-fluid m-3" alt="" />
                </div>

              </div>
          </div>
       
        </Modal>
        </div>
    )
}
