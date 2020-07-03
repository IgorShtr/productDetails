import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components';
import {setСhosenActivity, setModalState, setClearActionActivities} from '../store/reduser';
import {Actionactivity} from './activityAction'

export const  Actions = () =>{
const actionsList = [ "ADD LINK", "ADD VOUTE", "ADD PAIMENT", "ADD POLL"];
const dispatch = useDispatch();
const chosenActivity = useSelector(state => state.productDetails.chosenActivity);
const linksData = useSelector(state => state.productDetails.links);
const saveclick = () =>{
  dispatch(setModalState())
alert(JSON.stringify(linksData));
}

const actionBtn = actionsList.map(it=>(
  <ActionBtn 
  onClick={()=>dispatch(setСhosenActivity(it))}
  isActive = {chosenActivity === it ? true : false }>
    {it}
  </ActionBtn>
))

  return(
    <ActionsSection>
    <span onClick={()=>{dispatch(setModalState()); dispatch(setСhosenActivity(""))}}>&#10005;</span>
    <div>Chose action</div>
    <ActionBtnSection>
       {actionBtn}
    </ActionBtnSection>
   <Actionactivity/>
   <BottomBtnSection>
     <CancelBtn onClick={()=>dispatch(setClearActionActivities())}>Cancel</CancelBtn>
     <SaveBtn onClick={saveclick}>Save</SaveBtn>
   </BottomBtnSection>   
  </ActionsSection>
  )
}


const ActionsSection = styled.div`
border-left: 1px solid lightgrey;
padding: 10px;
width:270px;
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
const BottomBtnSection =  styled.div`
margin-top: 75px;
display:flex;
justify-content: flex-end;
width: 100%;
div:last-child{
  margin-left: 20px;
}
`

const CancelBtn = styled.div`
width: 75px;
height: 30px;
border: 1px solid lightgrey;
border-radius: 5px;
text-align: center;
line-height: 30px;
background-color: lightgrey;
color: grey;
cursor: pointer;
: hover{
  color: black; 
  background-color: white;
  border: 1px solid black;
}
`
const SaveBtn = styled.div`
width: 75px;
height: 30px;
border: 1px solid lightgrey;
border-radius: 5px;
text-align: center;
line-height: 30px;
background-color: lightgrey;
color: grey;
cursor: pointer;
: hover{
  color: black; 
  background-color: white;
  border: 1px solid black;
}
`