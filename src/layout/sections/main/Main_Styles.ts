import styled from "styled-components";
import photo1 from "../../../assets/images/photo-1.webp";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
    background: url(${photo1}) no-repeat;
    background-size: calc(50%);
    background-position: right;
    position: relative;

    @media ${theme.media.mobile} {
        background-size: calc(0%);
        padding: 0 0;
    }
`

const Photo = styled.img`
    opacity: 1;
    width: 0%;
    height: 0%;
    position: relative;

    @media ${theme.media.mobile} {
        width: 100%;
        height: 100%;
        max-height: 450px;
        object-fit: cover;
        opacity: 100;
        padding-right: 0;
        
    }
`

const SmallText = styled.h1`
    ${font({family: "'Playfair Display', sans-serif", weight: 700, Fmax: 90, Fmin: 50})}
    padding: 75px 0 10px;

    p {
        display: none;
    }

    @media ${theme.media.mobile} {
        padding: 40px 0 30px;
    }
`

const BoxContainer = styled.div`
    font-size: 20px;
    line-height: 1.8;
    color: ${theme.colors.grey};
    max-width: 404px;
    padding-bottom: 40px;

    @media ${theme.media.mobile} {
        margin: 0 0 50px;
    }
`

const BoxText = styled.p`
    ${font({Fmax: 20, Fmin: 16, lineHeight: 1.8, color: theme.colors.grey})}
    margin-bottom: 30px;

    @media ${theme.media.mobile} {
        margin-bottom: 40px;
    }
`

const ColorText = styled.span`
    color: ${theme.colors.font};
`

const ButtonOne = styled.button`
    ${font({Fmax: 20, Fmin: 16})}
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 204px;
    height: 64px;
    background: ${theme.colors.accent};
    color: ${theme.colors.font};
    border: 2px solid #676CDB;

    &:hover {
        transition: ${theme.animations.transition};
        color: ${theme.colors.accent};
        background-color: transparent;
    }

    @media ${theme.media.tablet} {
        width: 180px;
        height: 52px;
    }
`

const ButtonTwo = styled.button`
    ${font({Fmax: 20, Fmin: 16})}
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-decoration: underline;
    width: 201px;
    height: 44px;

    &:hover {
        transition: ${theme.animations.transition};
        color: ${theme.colors.accent};
    }

    @media ${theme.media.tablet} {
        width: 195px;
        height: 53px;
        padding-left: 15px;
    }
`

export const S = {
    Main,
    Photo,
    SmallText,
    BoxContainer,
    BoxText,
    ColorText,
    ButtonOne,
    ButtonTwo
}

//ьек убрать и сделать через позишн абсолют и спозиционировать
//для секции позишн релатив