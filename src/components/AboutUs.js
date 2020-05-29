import React from 'react';
import styled from '@emotion/styled';
import { Parallax } from 'react-parallax';

const Span = styled.p`
     font-family: 'Pacifico';
     text-transform:uppercase;
    font-size: 2.5rem;
    margin: 1rem;
    text-align:center;
`;

const Container = styled.div`

`;
const Colors = styled.div`
     background-color: rgba( 135, 140,135, .5);
     font-family: 'Balsamiq Sans', cursive;
  padding: 10px;
`;

const image4= "fondoAbout.jpeg"

const AboutUs = () => {


    return (
       <Parallax bgImage={image4}>
        <Container  className="animate__animated animate__fadeInUp">
       <Colors className="container capa" >  

          <Span className="font-weight-bold"> Smart Traffic </Span> 
               <p className="text-justify contactonav pl-auto">
               Empresa conformada por un grupo de estudiantes emprendedores creadores de una marca reconocida de semáforos con los que se disminuirá la congestión vehícular y mejorará uniformemente la circulación.   
                   Surgido recientemente de la Universidad Autonoma del Estado de México con el objetivo de introducir nuevas tecnologías de Sistemas Inteligentes de Transporte (ITS) en el mercado.
                   Este sitio web se creo con el objetivo de comercializar nuestro sistema de semaforos inteligentes. 
               </p>
              
                     <div className="d-flex justify-content-center shadow-lg">
                <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/Vx8k9lI3uF4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h2 className=" text-center p-2 trafico">Equipo De Desarrollo</h2>
        <div className="d-flex justify-content-center shadow-lg m-2">
         
          <img src="NOSOTROS.jpeg"  width="100%" height="auto" alt="" />
        </div>
        
        
           </Colors >
           
        </Container> 
        </Parallax>
    );
}


export default AboutUs;

