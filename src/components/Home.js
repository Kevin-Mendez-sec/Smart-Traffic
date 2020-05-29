import React from 'react';
import Obtener from './Home/Obtener';
import QueEs from './Home/Que';
import ComoFunciona from './Home/Como';
import Pros from './Home/Beneficio';
import Implementacion from './Home/Implementacion';


const Home = () => {
  
    
    return (

        <div className="bg-light animate__animated animate__slideInLeft ">

       
            <Obtener/>
            <QueEs
                Id="Que"
            />
            <ComoFunciona/>
            <Pros/>
            <Implementacion/>
         </div>
      );
}
 
export default Home;