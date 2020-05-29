import React from 'react';
import styled from '@emotion/styled';

const Span = styled.p`
     font-family: 'Pacifico';
     text-transform:uppercase;
    font-size: 2.5rem;
    margin: 10px;
    text-align:center;
`;

const QueEs = () => {
    return (
        <div className="m-0 d-inline-flex">
            <div className="row" >
                <div className="col-md  m-auto ">
                    <img src="https://www.rapidflowtech.com/hs-fs/hubfs/surtrac-traffic-signal-system-980px.jpg?width=980&name=surtrac-traffic-signal-system-980px.jpg" width="100%" height="auto" alt=""/>
                </div>
                <div className="col-md   m-auto pb-4">
                    <Span > ¿Qué es Smart Traffic ?</Span>
                    <p className=" contactonav text-justify m-2">
                    Smart Traffic es un enfoque innovador para el control de señales de tráfico en tiempo real, que combina la investigación de la inteligencia artificial y la teoría del tráfico.
                    Smart Traffic optimiza el rendimiento de las señales para el tráfico que está realmente en la carretera, mejorando el flujo de tráfico tanto para las redes urbanas como para
                    los corredores y generando menos esperas, congestión reducida, viajes más cortos, menos contaminación y conductores más felices.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QueEs;
