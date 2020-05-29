import React from 'react';
import Carta from './Animaciones/mail.jsx';
import styled from '@emotion/styled';
const Span = styled.p`
     font-family: 'Pacifico';
    font-size: 2.5rem;
    margin: 1rem;
`;



const Footer = () => {
    return (  
<div className="fondiu"> 
<div className=" container">
            <div className=" row ">
                <div className="col-md">
                    <div className="p-auto">
                        <Span>Smart Traffic</Span>
                         <p> 
                             <a className=" text-dark" href="/" > <span > Inicio</span> </a>
                        </p>   
                        <p>
                            <a className=" text-dark" href="/Contacto">Contacto</a>
                        </p>
                        <p>
                            <a className=" text-dark" href="/Nosotros"> Acerca de Nosotros</a>
                        </p>
                    </div> 
                    <div>
                    <Span>Acerca de los Semáforos</Span>
                         <p> 
                             <a className=" text-dark" href="/" > <span > Qué es Smart Traffic</span> </a>
                        </p>   
                        <p>
                            <a className=" text-dark" href="/Contacto">Contacto</a>
                        </p>
                        <p>
                            <a className=" text-dark" href="/AbouUs"> Acerca de Nosotros</a>
                        </p>
                    </div>
                </div>
                <div className="col-md">
                    <Carta/>
                </div>
            </div>
        </div>
</div>
     
    );
}

 
export default Footer;