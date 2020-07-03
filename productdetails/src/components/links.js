import React
  from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


export const Links = () => {


  const linksListProps = useSelector(state => state.productDetails.links);
  const linksList = (linksListProps || []).map(({ link }) => {
    return (
      <LinkMarkers key={uuidv4()}>
        {link}
      </LinkMarkers>
    )
  })
  return (
    <LinksContainer>
      {linksList}
    </LinksContainer>



  )
}
const LinksContainer = styled.div`
overflow:auto;
height: 150px;
`
const LinkMarkers = styled.div`
width: 70%;
margin: 10px auto;
padding: 5px 10px;
background-color: #ffca18;
border: 1px solid #ffca18;
 border-radius: 5px;
 cursor: pointer;
`