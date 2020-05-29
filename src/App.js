import React from 'react';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './components/Footer';
import styled from '@emotion/styled';
import 'animate.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Contacto from './components/Contacto';
import AboutUs from './components/AboutUs';
import Campaña from './components/Campaña';
import Calculo from './components/Calculo.js';



const Pagina = styled.div`
  width:100%;
`;



 setTimeout(
        function(){
      document.getElementById('loader').className="hide";
      document.getElementById('portada').className="portada animate__animated animate__slideInLeft";
        },1000
      )

function App() {
  

  const quitar = ()=>{
    document.getElementById('portada').className="animate__animated animate__slideOutDown";
    document.getElementById('portada').className="hide";
    document.getElementById('contenido').className="animate__animated animate__slideInLeft";
    setTimeout(()=>{

      window.scrollBy({
         buttom: 100,
         left: 100,
         behaviour: 'smooth'
       })
     } 
     ,1200)

  }

  return (
    

      <Pagina >
  <div id="loader">
  <div class="inner rotate-one"></div>
  <div class="inner rotate-two"></div>
  <div class="inner rotate-three"></div>
</div>

<div id='portada' className="hide">
  <div className="container m-auto pt-5 text-center inteligente" >
  <p>Hola mi nombre es <span className="font-bold inteligentetext "> Kevin Emmanuel Mendez jimenez </span> 
      y este es mi sitio web para la materia de Computación aplicada, además que nuestra información esta respaldada por la Uaemex .
      Si te interesa conocer la investigación realizada te invitamos a acceder al siguente link : <a href="http://blog-quinto-semestre.herokuapp.com/" > Smart Traffic investigación</a>
    </p>
    <p>
      Es un sitio web de tipo SPA utilizando el Freamwork de ReactJs <br/>
      Si quieres ver el codigo del sitio <a href="https://github.com/Kevin-Mendez-sec/Smart-Traffic">Haz click aquí </a> y mira mi repositorio en GitHub 
    </p>
    <button className="btn btn-primary px-auto" onClick={quitar}>
      Ver este sitio 
    </button>

  </div>
  
  </div>

      <div id='contenido'
          className="hide">
         <Router >
         <Header/>

            <Route exact path="/" component={Home} />
            <Route path="/Contacto" component={Contacto} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Campaña" component={Campaña}/>
            <Route path="/Calculo" component={Calculo}/>
           
  
        </Router>
           
          <Footer/>

           </div>
        </Pagina> 
   



   
  );
}

export default App;
