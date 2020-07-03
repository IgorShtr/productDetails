import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import itemImg from './productList/itemImg.jpg';
import { Links } from './links';
import { Actions } from './actionSection'

export const DetailsModal = () => {

  const isActive = useSelector(state => state.productDetails.isModalOpen);;
  !isActive ? document.body.style.overflow = "auto"
    : document.body.style.overflow = "hidden"

  return (
    isActive ? (
      <ProductDetailsModal   >
        <ModalContent>
          <PfotoLinks>
            <img src={itemImg} alt="not faund"></img>
            <Links />
          </PfotoLinks>
          <Actions />
        </ModalContent>
      </ProductDetailsModal>) : null
  )
}

const ProductDetailsModal = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
top:0;
left:0;
 position: fixed;
 background: rgba(0, 0, 0, 0.3);

`
const ModalContent = styled.div`
  height: fit-content;
  min-width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #F8F8F8;
  display: flex;  
  overflow: hidden;
  z-index:3;
  max-width: 70%;
`

const PfotoLinks = styled.div`
margin: 10px auto;
width: 300px;
display: flex;
flex-direction: column;
img{
 width: 250px; 
 margin: 0 auto; 
}
`;

