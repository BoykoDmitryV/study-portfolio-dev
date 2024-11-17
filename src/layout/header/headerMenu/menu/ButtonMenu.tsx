import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

export const ButtonMenu = () => {
    return (
        <StyledButtonMenu>Contact Me</StyledButtonMenu>
    );
};

const StyledButtonMenu = styled.button`
    width: 157px;
    height: 50px;
    padding: 10px 20px;
    background: ${theme.colors.accent};
    ${font({weight: 500, Fmax: 20, Fmin: 20})}
    color: ${theme.colors.font};
`