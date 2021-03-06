import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { setLink } from '../store/reduser';


export const AddLinkAction = () => {
  const dispatch = useDispatch();
  const [linkContent, setLinkContent] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [linkValidation, setLinkValidation] = useState(true);
  const [titleValidation, setTitleValidation] = useState(true);

  const addLink = (e) => {
    e.preventDefault();
    if ((linkContent.length > 0) && (titleContent.length > 0)) {
      const link = {
        title: titleContent,
        link: linkContent
      };
      dispatch(setLink(link));
      setTitleContent("");
      setLinkContent("");
      const inputes = document.querySelectorAll('input');
      inputes.forEach((it) => it.value = "");
      setLinkValidation(true);
      setTitleValidation(true)
    }
    else {
      !linkContent ? setLinkValidation(false) : setLinkValidation(true);
      !titleContent ? setTitleValidation(false) : setTitleValidation(true);
    }
  }

  return (
    < Conteiner>
      <Section>
        <p>Link</p>
        <LinkInput
          type="text"
          onChange={(e) => setLinkContent(e.target.value)}
          linkValidation={linkValidation} />
        {!linkValidation ? <p>Is requered</p> : <p></p>}
      </Section>
      <Section>
        <p>Title</p>
        <TitleInput
          type="text"
          onChange={(e) => setTitleContent(e.target.value)}
          titleValidation={titleValidation}
        />
        {!titleValidation ? <p>Is requered</p> : <p></p>}
      </Section>
      <AddBtn onClick={addLink}>Add</AddBtn>
    </Conteiner>
  )
};

const Conteiner = styled.div`
width: 90%;
height: 190px;
display: flex;
flex-direction:column;
p{
  color: grey;
  margin: 0;
  font-size: 12px;
}
`
const LinkInput = styled.input`
width: 100%;
height: 30px;
border:${props => props.linkValidation ? "1px solid grey" : "1px solid red"} ;
border-radius: 5px;
`
const TitleInput = styled.input`
width: 100%;
height: 30px;
border:${props => props.titleValidation ? "1px solid grey" : "1px solid red"} ;
border-radius: 5px;
`
const Section = styled.div`
margin-top: 10px;
width: 98%;
p:last-child{
  height: 12px;
  color: red;
  font-size:10px;
}
`

const AddBtn = styled.button`
align-self: flex-end;
width: 50px;
cursor: pointer;
padding: 5px;
background-color: #ffca18;
border: 1px solid  #ffca18;
border-radius: 5px;
font-size: 12px;
`