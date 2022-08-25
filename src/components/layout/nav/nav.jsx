import React, {useState, useEffect} from "react";
import PhoneNumber from "../../ui/phone-number/phone-number";
import {Ul} from "../../styled";
import {StyledButton, StyledLi, CloseButton} from "./styles";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(true);
  const fixedButton = () => {
    if (typeof window !== 'undefined') { 
      if (window.pageYOffset > window.innerHeight) {
        setShow(false); 
      } else { 
        setShow(true);  
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', fixedButton);
      return () => {
        window.removeEventListener('scroll', fixedButton);
      };
    }
  }, []);

  const links = [
    {
      to: AppRoute.MAIN,
      item: <CloseButton to={AppRoute.MAIN}></CloseButton>
    },
    { to: AppRoute.FORM, 
      item:
      <>    
        <PhoneNumber inHeader /> 
        <StyledButton isColor link={AppRoute.FORM} minWidth={187} className={show ? 'hidden' : ''}>
          Заполнить анкету
        </StyledButton> 
      </>
    }
  ];
  const pageUrl = useLocation().pathname;
  const key = pageUrl === links[0].to ? 1 : 0;

  return (
    <nav>
      <Ul>
        <StyledLi key={links[key].to}>{links[key].item}</StyledLi>
      </Ul>
    </nav>
  );
}

export default Nav;