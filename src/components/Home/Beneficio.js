import React from 'react';
import styled from '@emotion/styled';





const Span = styled.p`
     font-family: 'Pacifico';
     text-transform:uppercase;
    font-size: 2.5rem;
    margin: 1rem;
    text-align:center;
`;
const image2= "https://www.rapidflowtech.com/hs-fs/hubfs/Surtrac-benefits.jpg?width=980&name=Surtrac-benefits.jpg"

const Pros = () => {
    
    

    return ( 
        <div>
          
       <div className="row  d-md-flex justify-content-around"> 
          
                <div className="col-md wow animate__backInRight">
                           <img src={image2} alt="" width="100%" height="auto" />
                                    
                   </div>  
       
                  
                <div className="col-md m-auto container pb-4">
                    <Span> Beneficios</Span>
                    <p className=" contactonav text-justify">
                    Se ha demostrado que Smart Traffic  brinda a las ciudades y a sus peatones los siguientes beneficios: <br/>
                    Ahorro de tiempo con control de tráfico en tiempo real.<br/>
                    Ahorro de dinero con implementaciones escalables<br/>
                    Mejora de la calidad del aire a través de la reducción de emisiones.
                    </p>
                 </div>
            </div>
        </div>
     );
}
 
export default Pros;