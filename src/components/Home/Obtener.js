import React from 'react';
import styled from '@emotion/styled';
import { Parallax} from 'react-parallax';
const Titulo = styled.p`
    font-family: 'Pacifico', cursive;
    text-transform:uppercase;
    font-size: 3rem;
    padding-top: 25px;
`;

const image1 = "./fondoHome.jpeg"

const Obtener = () => {
    return (
        <Parallax bgImage={image1}>
        <div className=" pb-2" > 
        <div className="capa">
             <div className="container text-light" >
            <Titulo>Smart Traffic</Titulo>
            <h4 className="text-right trafico pb-8 ">EL TRÁFICO INTELIGENTE</h4>
            <div className="row ">
                <div className="col-md-5 mt-3 contactonav text-justify">
                    A diferencia de otros sistemas que pueden tardar minutos en responder a los cambios en el tráfico, Smart Traffic se adapta en tiempo real a los cambios de tráfico optimizando los flujos de tráfico cada segundo.
                     Smart Traffic coordina los flujos de tráfico en redes complejas, no solo en arterias o corredores con patrones de tráfico mucho menos dinámicos. 
                     Smart Traffic se optimiza para muchos modos de viaje, manteniendo vehículos, ciclistas, peatones y tránsito en movimiento y seguros.
               </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-3">
                        <img src="20.svg" width="100px" alt=""/>
                        </div>
                        <div className="col">
                     <div>
                        <span className="font-weight-bold inteligente">TIEMPO DE VIAJE </span>
                        <p className="inteligentetext">  
                            Lleve a las personas a sus destinos un 25% más rápido eliminando paradas,
                            reduciendo el tiempo de espera y aumentando las velocidades de viaje.
                         </p>
                    </div>
                        </div>
                    </div>
                   

                    <div className="row">
                        <div className="col-md-3">
                        <img src="44.png" width="100px" alt=""/>
                        </div>
                        <div className="col">
                           <div> 
                        <span className="font-weight-bold inteligente">RETRASAR</span>
                        <p className="inteligentetext">
                             Pase más del 40% menos de tiempo esperando en las intersecciones.
                        </p>
                    </div>
                        </div>
                    </div>
                   

                  
 

                    <div className="row">
                        <div className="col-md-3">
                            <img src="40.png" width="100px" alt=""/>
                        </div>
                        <div className="col">
                            <span className="font-weight-bold inteligente">PARADAS </span>
                        <p className="inteligentetext">
                             Haga un 40% menos de paradas, disminuyendo el desgaste en la carretera y los neumáticos y resultando en un ahorro de costos para los conductores y las ciudades.
                        </p>
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                        <img src="20.png" width="100px"  alt=""/>
                        </div>
                        <div className="col">
                   <div>
                        <span className="font-weight-bold inteligente">EMISIONES </span>
                        <p className="inteligentetext">
                            Produzca un 20% menos de emisiones nocivas y mejore la calidad del aire al reducir las paradas y el ralentí.
                         </p>
                    </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>
        </div>
       
    </div>
        </Parallax>

    );
}

export default Obtener;