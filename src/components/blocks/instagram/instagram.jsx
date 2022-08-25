import React, {useState, useEffect} from "react";
import Title, {TitleLevel} from "../../ui/title/title";
import {Section} from "../../styled";
import Button from "../../ui/button/button";
import {StyledInstagramList, StyledInstagramElement} from "./styles";

const instagramElements = ["","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,""];
const InstagramElementCount = 5;

function Instagram() {
  const [instaShow, setInstaShow] = useState(InstagramElementCount);
  const [addBoxes, setAddBoxes] = useState(3);
  const instaBoxes = instagramElements.slice(0, instaShow);
  const detectSize = () => {
    if (typeof window !== 'undefined') { 
      if (window.innerWidth > 768) {
        setAddBoxes(4); 
      } else { 
        setAddBoxes(3);  
      }
    }
  };
  useEffect(
     detectSize
  , [addBoxes]);
  return (
    <Section>
      <Title level={TitleLevel.H2}>мы в инстаграме</Title>
      <StyledInstagramList>
        {instaBoxes.map((index) => (
            <StyledInstagramElement key={index} />
          ))}
      </StyledInstagramList>
      {instagramElements.length > instaBoxes.length && (
        <Button onClick={() => setInstaShow(instaShow + addBoxes)}>показать ещё</Button>
      )}
    </Section>
  );
}

export default Instagram;
