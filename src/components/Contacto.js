import React from 'react';
import styled from '@emotion/styled';

const Fondo = styled.div`
 `;
const Color = styled.div`
     background-color: rgba(135, 140, 135, .8);
     color: black;
`;
const Contacto = () => {
    return (
    
<Fondo 
className="contacto animate__animated animate__fadeInUp "
>
    < Color className="container  py-5 letra">
          <h3 className=" text-center trafico p-4">
          ¿ Quieres contactarnos de forma inmediata ?
        </h3>
        <p className="contactonav">
            Aqui tienes un correo electronico directo:
        </p>
        <p className="contactonav">
            Correo de contacto : <span className="inteligente"> smarttrafficventas@gmail.com </span>
        </p>
        <p className="pb-2 contactonav mb-0">
            O si prefieres nosotros estaremos encatados de contactarte <br/> solo rellena 
            el formulario de la parte inferior y te responderemos lo antes posible.
        </p>
        <div>
            <img src="https://1.bp.blogspot.com/-MNpRI6NxbV0/V3fDNVM2s1I/AAAAAAACvZ4/t4mLhT2uT3cy5HTklbxzSK5nBTR7adnSQCLcB/s400/tumblr_nknpioT7VI1s141c3o1_540.gif" alt="" className=" shadow-lg"/>
            
        </div>
    </Color>
      
    </Fondo>);
}
 
export default Contacto;