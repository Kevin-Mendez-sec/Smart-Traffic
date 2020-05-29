import React from 'react';
import styled from '@emotion/styled';
const Span = styled.p`
     font-family: 'Pacifico';
     text-transform:uppercase;
    font-size: 2.5rem;
    margin: 1rem;
`;
const Implementacion = () => {
    return (  
        <div className="bg-dark text-light">
        <div className="row d-md-flex justify-content-around">

            <div className="col-md order-md-1">
                <img src="https://www.rapidflowtech.com/hs-fs/hubfs/Surtrac-how-it-works.jpg?width=980&name=Surtrac-how-it-works.jpg" width="100%" height="auto" alt=""/>
            </div>
            <div className="col-md order-md-0  m-auto containe pb-4">
                <Span className="text-center">Implementación</Span>
                <p className=" contactonav text-justify m-2"> 
                    Debido a que Smart Traffic es un sistema descentralizado, se pueden agregar grupos de intersecciones a la red a lo largo del tiempo, 
                    reduciendo el costo y el riesgo de implementación de tener que hacer la transición de una red de ciudad completa a la vez. 
                </p>
            </div>
        </div>
    </div>
    );
}
 
export default Implementacion;