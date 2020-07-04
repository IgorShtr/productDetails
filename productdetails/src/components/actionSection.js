import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { mediaMobile } from './mediaBreakPoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { setСhosenActivity, setModalState, setClearActionActivities } from '../store/reduser';
import { Actionactivity } from './activityAction'

export const Actions = () => {
  const actionsList = ["ADD LINK", "ADD VOUTE", "ADD PAIMENT", "ADD POLL"];
  const dispatch = useDispatch();
  const chosenActivity = useSelector(state => state.productDetails.chosenActivity);
  const linksData = useSelector(state => state.productDetails.links);


  const iconName = (linkName) => {
    switch (linkName) {
      case "ADD LINK":
        return faLink;

      case "ADD VOUTE":
        return faThumbsUp;

      case "ADD PAIMENT":
        return faCreditCard;

      case "ADD POLL":
        return faLock;

      default:
        return null;
    }
  };


  const saveСlick = () => {
    dispatch(setСhosenActivity(""))
    dispatch(setModalState());
    alert(JSON.stringify(linksData));

  }

  const actionBtn = actionsList.map(it => (
    <ActionBtn
      onClick={() => dispatch(setСhosenActivity(it))}
      isActive={chosenActivity === it ? true : false}>
      <Icon icon={iconName(it)} isActive={chosenActivity === it ? true : false} />
      {it}
    </ActionBtn>
  ))

  return (
    <ActionsSection>
      <span onClick={() => { dispatch(setModalState()); dispatch(setСhosenActivity("")) }}>&#10005;</span>
      <ChooseAction>
        <div>Choose action</div>
        <ActionBtnSection>
          {actionBtn}
        </ActionBtnSection >
      </ChooseAction>

      <Actionactivity />
      <BottomBtnSection>
        <CancelBtn onClick={() => dispatch(setClearActionActivities())}>Cancel</CancelBtn>
        <SaveBtn onClick={saveСlick}>Save</SaveBtn>
      </BottomBtnSection>
    </ActionsSection>
  )
}


const ActionsSection = styled.div`
border-left: 1px solid lightgrey;
width:270px;
display: flex;
flex-direction: column;
align-items: center; 
span{
  margin-right: 10px;
  align-self: flex-end;
  cursor: pointer;
}
`
const ChooseAction = styled.div`
width:90%;
display: flex;
flex-direction: column;
align-items: center; 
border-bottom: 1px solid lightgrey;
>div:first-child{ 
  font-weight: 500;
  align-self:flex-start;
}
`
const ActionBtnSection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
${mediaMobile(`
justify-content: center;
`)}
padding: 10px 0;
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
svg{
  margin-right: 5px;
}
`
const BottomBtnSection = styled.div`
margin-top: 75px;
padding: 10px;
display:flex;
justify-content: flex-end;
width: 90%;
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
const Icon = styled(FontAwesomeIcon)`
color: ${props => props.isActive ? "black" : "#ffca18"}
`