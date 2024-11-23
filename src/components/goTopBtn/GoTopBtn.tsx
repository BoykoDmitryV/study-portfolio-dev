import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={"arrowGoTop"} width="16" height="15" viewBox="0 0 16 15"/>
                </StyledGoTopBtn>
            )}
        </>
    );
};


const StyledGoTopBtn = styled.button`
    background: ${theme.colors.secondaryBg};
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;

    &:hover {
        background-color: #676CDB;
        transition: ${theme.animations.transition}
    }
`