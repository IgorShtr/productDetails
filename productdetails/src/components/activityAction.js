import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';
import {AddLinkAction} from './addLinkAction'

export const Actionactivity = ()=>{
  const chosenActivity = useSelector(state => state.productDetails.chosenActivity);


  const chosenActivityDitails = (activityName) => {
    switch (activityName) {
      case "ADD LINK":
        return <div> 
                <AddLinkAction/>
              </div>;

      case "ADD VOUTE":
        return <ActivityAction> ADD VOUTE</ActivityAction>;

      case "ADD PAIMENT":
        return  <ActivityAction> ADD PAIMENT</ActivityAction>;

      case  "ADD POLL":
        return <ActivityAction> ADD POLL</ActivityAction>;

      default:
        return <ActivityAction></ActivityAction>;
    }
  };
  return (
<>{chosenActivityDitails(chosenActivity)}</>
  )
}

const ActivityAction = styled.div`
padding-top: 10px;
height: 180px;
`