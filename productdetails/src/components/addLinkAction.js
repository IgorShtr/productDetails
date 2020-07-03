import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import styled from 'styled-components';
import {setLink} from '../store/reduser'


export const AddLinkAction =()=> {
  const dispatch = useDispatch();
  const [linkContent, setLinkContent] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [linkValidation, setLinkValidation] = useState(true);
  const [titleValidation, setTitleValidation] = useState(true);

const addLink = (e) =>{
  
  e.preventDefault();
  if ((linkContent.length>0) && (titleContent.length>0)){
    const link = {
      title : titleContent,
      link: linkContent
    };
    dispatch(setLink(link));
    setTitleContent("");
    setLinkContent("");
    const inputes = document.querySelectorAll('input');
    inputes.forEach((it)=>it.value=""); 
    setLinkValidation(true);
    setTitleValidation(true)
  }  
  else {
console.log(!linkContent, titleContent.length)
!linkContent ? setLinkValidation(false) : setLinkValidation(true);
!titleContent ? setTitleValidation(false) : setTitleValidation(true);
  } 
}

console.log(linkValidation, titleValidation)
  return(
   < Conteiner>
   <Section>
      <p>Link</p>
   <LinkInput 
    type="text" 
    onChange={(e)=>setLinkContent(e.target.value)}
    linkValidation={linkValidation}/>
   </Section>
  <Section>
       <p>Title</p>
   <TitleInput 
   type="text"
   onChange={(e)=>setTitleContent(e.target.value)}
   titleValidation={titleValidation}
   />
  </Section>
<AddBtn onClick={addLink}>Add</AddBtn>
   </Conteiner>
  )
}

const  Conteiner = styled.div`
width: 270px;
padding: 0 10px;
display: flex;
flex-direction:column;
p{
  color: grey;
  margin: 0;
  font-size: 12px;
}
`
const LinkInput = styled.input`
width: 95%;
height: 30px;
border:${props => props.linkValidation ? "1px solid grey" : "1px solid red"} ;
border-radius: 3px;
`
const TitleInput = styled.input`
width: 95%;
height: 30px;
border:${props => props.titleValidation ? "1px solid grey" : "1px solid red"} ;
border-radius: 3px;
`
const Section = styled.div`
margin-top: 10px;
width: 100%;
`

const AddBtn = styled.button`
margin-top: 20px;
align-self: flex-end;
width: 75px;
cursor: pointer;
padding: 5px;
background-color: #ffca18;
border: 1px solid  #ffca18;
border-radius: 3px;
`