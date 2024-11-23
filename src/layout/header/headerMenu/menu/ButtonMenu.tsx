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
    padding: 14px 20px;
    background: ${theme.colors.accent};
    ${font({weight: 500, Fmax: 20, Fmin: 20})}
    color: ${theme.colors.font};
    border: 2px solid #676CDB;

    &:hover {
        transition: ${theme.animations.transition};
        color: ${theme.colors.accent};
        background-color: transparent;
    }
    
    @media ${theme.media.tablet} {
        margin-bottom: 100px;
    }
`