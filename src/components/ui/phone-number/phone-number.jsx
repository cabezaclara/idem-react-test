import React from "react";
import { StyledLink, PhoneText, PhoneImage } from "./styles";

function PhoneNumber({inHeader}) {
    return (
        <StyledLink href="tel:+79264331416" $inHeader={inHeader}>
            <PhoneText $inHeader={inHeader}>+7 (926) 433-14-16</PhoneText>
            <PhoneImage $inHeader={inHeader} />
        </StyledLink>
    );
};

export default PhoneNumber;