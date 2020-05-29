import React from 'react'
import Empresa from './Empresa'
import { Parallax } from 'react-parallax'


const image3= "https://lasdiferencias.com/wp-content/uploads/2019/11/Coche-circulando-por-una-autovi%CC%81a.jpg"
export default function Campaña() {
    return (
        <Parallax bgImage={image3} className="">

       

        <div className="capa">
  <div className="container letra letraB text-center">
            <h4 className="pt-4 trafico" style={{textTransform: `uppercase`}}>Conoce nuestra campaña publicitaria</h4>
            <p className="p-2 contactonav">Si estas interesado en conocer nuestra Campaña publicitaria te dejamos toda la información aqui abajo </p>
        
        </div> 
        <Empresa/>
        </div>
  
            </Parallax>
        
    
    )
}
