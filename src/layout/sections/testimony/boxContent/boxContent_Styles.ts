import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const BoxInformation = styled.div`
    max-width: 895px;
    display: flex;
    height: 100%;
    
    @media ${theme.media.tablet} {
        flex-direction: column;
    }
`

const Photo = styled.img`
    max-width: 405px;
    height: 395px;
    //background: #c4c4c4, url("path_to_image");
    object-fit: cover;
    padding-right: 15px;
    @media ${theme.media.mobile} {
        width: 335px;
        height: 373px;
        padding-right: 0;
    }
`

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media ${theme.media.mobile} {
        width: 100%;
        height: 100%;
    }
`

const BoxTitle = styled.h3`
    font-size: 100px;
    color: ${theme.colors.grey};
    height: 55px;
    
    @media ${theme.media.tablet} {
        height: 100px;
        padding-top: 25px;
    }
`

const BoxP = styled.p`
    font-weight: 700;
    
    @media ${theme.media.tablet} {
        margin-bottom: 20px;
    }
`

const BoxButton = styled.div`
    width: 95px;
    margin-left: 15px;
    display: flex;
    gap: 15px;
`

export const S = {
    BoxInformation,
    Photo,
    BoxContainer,
    BoxTitle,
    BoxP,
    BoxButton
}