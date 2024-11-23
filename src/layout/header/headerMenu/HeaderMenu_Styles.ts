import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";


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
    
    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 26px;
        padding: 160px 135px 172px;
        padding: 0px 135px 120px;
    }
    
    @media ${theme.media.mobile} {
        padding: 0px 135px 120px;
    }
`

const MenuItem = styled.li`
    padding: 10px;
    gap: 40px;
`

const NavLink = styled(Link)`
    font-weight: 500;
    font-size: 20px;
    
    &:hover, &.active {
        color: ${theme.colors.accent};
        transition: ${theme.animations.transition}
    }
`

//MobileMenu
const MobileMenu = styled.nav`
    font-weight: 500;
    font-size: 20px;
    width: 100%;
    
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    min-height: 1000px;
    height: 100vh;
    width: 100%;
    left: 0;
    background-color: ${theme.colors.primaryBgOpacity};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.6s ease-in-out;
    
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 25px;
    right: 20px;
    width: 60px;
    height: 60px;
    z-index: 9999999;
    display: flex;
    justify-content: center;
    @media ${theme.media.tablet} {
        position: fixed;
        top: 24px;
        right: 20px;
    }

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
`

export const S = {
    StyledMenu,
    MenuItem,
    NavLink,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}