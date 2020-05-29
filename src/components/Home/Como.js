import React from 'react';
import styled from '@emotion/styled';
const Span = styled.p`
     font-family: 'Pacifico';
     text-transform:uppercase;
    font-size: 2.5rem;
    margin: 1rem;
`;
const ComoFunciona = () => {
    return ( 
        <div className="bg-dark text-light">
            <div className="row">
 
                <div className="col-md order-md-1 m-auto">
                    <img src="https://www.rapidflowtech.com/hs-fs/hubfs/Surtrac-how-it-works.jpg?width=980&name=Surtrac-how-it-works.jpg" width="100%" height="auto" alt=""/>
                </div>
                <div className="col-md m-auto order-md-0 container pb-4 ">
                    <Span className="text-center">¿Cómo funciona?</Span>
                    <p className="text-justify contactonav m-2"> 
                        Smart Traffic es un sistema robótico / AI que trata el desafío del control de intersección de una manera completamente nueva, como un problema de programación de una sola máquina. 
                        Luego, la tecnología puede programar vecinos aguas abajo para dar visibilidad de futuros trabajos de entrada.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default ComoFunciona;