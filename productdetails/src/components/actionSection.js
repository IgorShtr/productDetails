import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components';
import {setСhosenActivity} from '../store/reduser';
import {Actionactivity} from './activityAction'

export const  Actions = () =>{
const actionsList = [ "ADD LINK", "ADD VOUTE", "ADD PAIMENT", "ADD POLL"];
const dispatch = useDispatch();
const chosenActivity = useSelector(state => state.productDetails.chosenActivity);


const actionBtn = actionsList.map(it=>(
  <ActionBtn 
  onClick={()=>dispatch(setСhosenActivity(it))}
  isActive = {chosenActivity === it ? true : false }>
    {it}
  </ActionBtn>
))

  return(
    <ActionsSection>
    <span>&#10005;</span>
    <div>Chose action</div>
    <ActionBtnSection>
       {actionBtn}
    </ActionBtnSection>
   <Actionactivity/>
  </ActionsSection>
  )
}


const ActionsSection = styled.div`
border-left: 1px solid lightgrey;
padding: 10px;
max-width:270px;
display: flex;
flex-direction: column;
align-items: center; 
span{
  align-self: flex-end;
  cursor: pointer;
}
`
const ActionBtnSection = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 10px 0;
border-bottom: 1px solid lightgrey;
`
const ActionBtn = styled.div`
border: 1px solid grey;
border-radius: 5px;
font-size: 12px;
background-color:${props => props.isActive ? "#ffca18" : "none"};
width: 100px;
text-align: center;
margin-top: 10px;
cursor: pointer;
padding: 5px;

:hover{
  border: 1px solid black;
}
`