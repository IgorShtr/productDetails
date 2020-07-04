import React from 'react';
import styled from 'styled-components';
import {ProductsList} from '../components/productList/productsList';
import {DetailsModal} from '../components/productsDetailsModal';

export const MainView = () =>{

  return(    
       <Contrainer>         
        <ProductsList/>
        <DetailsModal/>
      </Contrainer>
   
  )
};

const Contrainer = styled.div`
height: 500px;
width: 100vw;
padding: 20px;
`