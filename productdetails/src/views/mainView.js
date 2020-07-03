import React from 'react';
import styled from 'styled-components';
import {Layout} from '../components/layout'
import {ProductsList} from '../components/productList/productsList';
import {DetailsModal} from '../components/productsDetailsModal'

export const MainView = () =>{

  return(
    <Layout>
       <Contrainer>         
        <ProductsList/>
        <DetailsModal/>
      </Contrainer>
    </Layout>
   
  )
}

const Contrainer = styled.div`
height: 500px;
width: 100vw;
`