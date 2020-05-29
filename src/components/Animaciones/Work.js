import React from 'react';
import styled  from '@emotion/styled';  


const SvgMate = styled.div`
  padding-left:2rem;
`;


const Workstation = () => {
    return ( 
       
        <SvgMate>
            <img src="gif.gif" width="500px"  className="img-fluid pl-auto" alt=""/>
        </SvgMate>
     );
}
 
export default Workstation;