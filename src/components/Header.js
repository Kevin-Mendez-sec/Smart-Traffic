import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  font-family: 'Advent Pro', sans-serif;
  font-size: 20px;
`;
const Contacto = styled.div`
  background-color:#FBFCFC;
  font-weight:bold;
`;

const Header = () => {

  return (
    <Fragment >
      <Nav className='navbar navbar-expand-lg navbar-dark bg-dark' >
        <img src="./Logo.png" width="180px" height="auto" className="d-inline-block align-top img-fluid" alt="" />
      <Link className="text-decoration-none pl-2 " to="/"> <h1 className=" titulo letraB text-center" >Smart Traffic </h1>  </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      
      <div className=" d-lg-flex justify-content-end collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav   ">
          
          <Link className="nav-item nav-link active" to="/AboutUs"> <span className="letraB navletra">Acerca de Nosotros </span> </Link>
          <Link className="nav-item nav-link active" to="/Campaña"><span className="letraB navletra"> Campaña Publicitaria</span></Link>
          <Link className="nav-item nav-link active" to="/Contacto"><span className="letraB navletra">Contacto </span></Link>
          <Link className="nav-item nav-link active" to="/Calculo"><span className="letraB navletra">Calculo </span></Link>
        </div>
      </div>
    </Nav>
    <Contacto className="text-center " >
      <p className="m-0 animate__bounceIn contactonav ">Estamos disponibles para tu servicio las 24 horas del día</p>
    </Contacto>
   </Fragment>
    

  );
}

export default Header;