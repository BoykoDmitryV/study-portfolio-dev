import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const BoxInformation = styled.div`
    max-width: 894px;
    width: 100%;
    display: flex;
    height: 100%;
    //border: 1px solid red;
    
    &:hover {
        cursor: pointer;
    }
    
    @media ${theme.media.tablet} {
        flex-direction: column;
    }
`

const Image = styled.img`
    max-width: 405px;
    min-width: 405px;
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
        padding-top: 12px;
    }
`

const BoxText = styled.p`
    font-weight: 700;
    max-height: 248px;
    overflow: auto;
    
    @media ${theme.media.tablet} {
        margin-bottom: 82px; //после текста изменить на 20пикс
        height: 100%;
        max-height: 400px;
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
    Image,
    BoxContainer,
    BoxTitle,
    BoxText,
    BoxButton
}

//wrap щдля боксконтенти=а и выровнять информатион в стрку для ворков @контейнер через локальный медиазапрос