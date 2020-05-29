import React from 'react'
import Modal from 'react-modal';
import CuatroC from './campaña/4C';
import Stand from './campaña/stand';
import Prototipo from './campaña/prototipo';
import Alternativas from './campaña/alternativas';
import Triptico from './campaña/Triptico';
import Canvas from './campaña/canvas';





Modal.setAppElement('#root')

export default function Empresa() {


  return (
    <div>

      <div className="d-sm-flex  justify-content-around p-4 animate__animated animate__zoomInDown">

          <CuatroC />
          <Stand />
          <Prototipo/>
        

      </div>

      <div className="d-sm-flex justify-content-around p-4 animate__animated animate__backInUp">
         <Alternativas/>
       <Triptico/>
    <Canvas/>
      </div>

      <div className="hide">
       <img src="4C.png" alt=""/>
       <img src="canvas.jpeg" alt=""/>
       <img src="stand.png" alt=""/>
       <img src="prototipo.png" alt=""/>
       <img src="TRIP_1.png" alt=""/>
       <img src="TRIP_2.png" alt=""/>
       <img src="empresa.png" alt=""/>
       <img src="empresa2.png" alt=""/>
     </div>
    </div>
  )
}
