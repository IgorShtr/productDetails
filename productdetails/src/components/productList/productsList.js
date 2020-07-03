import React from 'react';
import styled from 'styled-components';
import itemImg from './itemImg.jpg'

export const ProductsList = () =>{

  return(
    <ProductShortInfo>      
      <img src={itemImg} alt="not faund"></img>
      <div>Body</div>
<MoreDetailsBtn> More Ditails</MoreDetailsBtn>
    </ProductShortInfo>  
  )
}

const ProductShortInfo = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
 img {
   height: 300px;
   width: 400px;
 }
  div:first-child {
   width: fit-content;
 }
`
const MoreDetailsBtn = styled.button`
  margin-top: 20px;
 background-color: lightgrey;
 border: 1px solid grey;
 border-radius: 3px;
padding: 10px;
cursor:pointer;
`