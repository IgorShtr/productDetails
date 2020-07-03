import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {setModalState} from '../../store/reduser';
import itemImg from './itemImg.jpg';

export const ProductsList = () =>{
const dispatch = useDispatch();
  return(
    <ProductShortInfo>      
      <img src={itemImg} alt="not faund"></img>
      <div>Body</div>
<MoreDetailsBtn onClick={()=> dispatch(setModalState())}> More Ditails</MoreDetailsBtn>
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
   width: 300px;
 }
  div:first-child {
   width: fit-content;
 }
`
const MoreDetailsBtn = styled.button`
  margin-top: 20px;
 background-color: lightgrey;
 border: 1px solid grey;
 border-radius: 5px;
padding: 10px;
cursor:pointer;
`