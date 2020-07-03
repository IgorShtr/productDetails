import React from 'react';
import styled from 'styled-components';
import { useSelector} from 'react-redux'
import itemImg from './productList/itemImg.jpg';
import {Links} from './links';
import {Actions} from './actionSection'

export const DetailsModal = ()=> {
 
  const isActive =useSelector(state => state.productDetails.isModalOpen);;


  return (
    isActive ? (
      <ProductDetailsModal   >
        <ModalContent>
      <PfotoLinks>
        <img src={itemImg} alt="not faund"></img>
        <Links/>
      </PfotoLinks>
      <Actions/>
        </ModalContent>
      </ProductDetailsModal>) : null
  )
}

const ProductDetailsModal = styled.div`
width: 100%;
height: 100%;
overflow-x: auto;
top:0;
left:0;
 position: fixed;
 background: rgba(0, 0, 0, 0.3);

`
const ModalContent = styled.div`
  height: fit-content;
  position: absolute;
  top:20%;
  right:15%;
  background: #F8F8F8;
  // padding: 40px; 
  display: flex;
   
  overflow: auto;
  z-index:3;
  max-width: 70%;
`

const PfotoLinks = styled.div`
margin: 10px;
img{
 width: 250px;  
}
`;

const ActionsSection = styled.div`
border-left: 1px solid lightgrey;
width: 40%;
display: flex;
margin: 10px;
flex-direction: column;
align-items: center; 
span{
  align-self: flex-end;
  cursor: pointer;
}
`