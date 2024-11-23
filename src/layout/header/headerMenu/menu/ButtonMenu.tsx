import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";
import {Link} from "react-scroll";

export const ButtonMenu = () => {
    return (
        <StyledButtonMenu
            to={"contacts"}
            smooth={true}
            activeClass="active"
            spy={true}
        >Contact Me</StyledButtonMenu>
    );
};

const StyledButtonMenu = styled(Link)`
    width: 157px;
    height: 50px;
    padding: 10px 20px;
    background: ${theme.colors.accent};
    ${font({weight: 500, Fmax: 20, Fmin: 20})}
    color: ${theme.colors.font};
    
    &:hover, &.active {
        box-shadow: 2px -2px 4px rgba(103, 108, 219, 1);
        transition: ${theme.animations.transition};
    }
    
    @media ${theme.media.tablet} {
        margin-bottom: 100px;
    }
`