import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


//Menu
const StyledMenu = styled.ul`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 305px;
    a {
        font-weight: 500;
        font-size: 20px;
        color: ${theme.colors.font};
    }
`

const MenuItem = styled.li`
    padding: 10px;
    gap: 40px;
`

const Link = styled.a`
    font-weight: 500;
    font-size: 20px;
`

//MobileMenu
const MobileMenu = styled.nav`
    padding: 15px;
    font-weight: 500;
    font-size: 20px;
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    z-index: 9999999;
    display: flex;
    justify-content: center;

    span {
        display: block;
        width: 34px;
        height: 2px;
        background-color: ${theme.colors.font};

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 34px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 34px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

//DesktopMenu
const DesktopMenu = styled.nav`
    font-weight: 500;
    font-size: 20px;
    margin-top: 15px;
`

export const S = {
    StyledMenu,
    MenuItem,
    Link,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}