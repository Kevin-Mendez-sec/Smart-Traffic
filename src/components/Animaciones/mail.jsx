import React, { Fragment } from 'react';
import './jsquerys';
import './styles.css';
import styled from '@emotion/styled';
 

const Boton = styled.input`
    margin-top:20px;
    font-weight: bold;
    font-size:20px;
    padding:10px;
    background-color:#66a2fe;
    border:none;
    width:100%;
    border-radius: 10px;
    color:#fff;
    transition: background-color .3s ease;
    &:hover{
        background-color:#326AC0;
        cursor: pointer;
    }

`;

const Carta = () => {
  

  return (
    <Fragment >
      

<h4 className="letra" >Cuéntanos que tienes en mente!!</h4>
<div className="row" >
<form className=" p-auto col-md">
        <div  className="form-group m-auto">
         
          <label > Email  </label>
          <input name="email" className="form-control" type="email" />
          <label> Nombre </label>
          <input name="name" className="form-control" type="text" />
          <label> Asunto </label>
          <input name="asunto" className="form-control" type="text" />
       </div>
    <Boton
    className="disable"
      type="submit"
      value="ENVIAR"
    />
      </form>
      <div className="col-lg m-auto px-auto"> 
           <div id="envelope">
        <div id="flap"></div>
      
        <div id="front"></div>
      </div>
      </div>
</div>
   

    </Fragment>);
}

export default Carta;

