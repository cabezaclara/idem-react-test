import React, {useEffect} from "react";
import DataProcessing from "../data-processing/data-processing";
import {StyledPopup, PopupContent} from "./styles";

function Popup({isShow, onClose}) {

  const handlerEsc = (evt) => {
    if (evt.keyCode === 27) {
      onClose && onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isShow ? (
    <StyledPopup onClose={onClose}>
      <PopupContent>
        <DataProcessing onClose={onClose} />
      </PopupContent>
    </StyledPopup>
  ) : null;
}

export default Popup;