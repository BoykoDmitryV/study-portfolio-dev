import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <StyledLogo
            onClick={() =>
            {scroll.scrollToTop()}}
        >Logo</StyledLogo>
    );
};

const StyledLogo = styled.a`
    font-weight: 700;
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
    
    &:hover {
        color: ${theme.colors.accent};
        transition: .2s ease-in-out;
    }
    
    @media ${theme.media.tablet} {
        position: fixed;
        top: 25px;
        left: 36px;
        width: 60px;
        height: 60px;
        z-index: 9999999;
        display: flex;
        justify-content: center;
    }
`