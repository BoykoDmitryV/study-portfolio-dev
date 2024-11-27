import styled from "styled-components";
import {InfoName} from "../../../../components/Information";
import {theme} from "../../../../styles/Theme";

const StyledBoxEmail = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 39px;
    
    ${InfoName} {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 22px;
    }
    //textarea {
    //    resize: none;
    //}
`

const Field = styled.input`
    width: 100%;
    font-family: "Poppins", sans-serif;
    border: 0;
    font-size: 18px;
    border-bottom: 1px solid ${theme.colors.font};
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.font};
    outline: none;
    transition: ${theme.animations.transition}
`

const SendButton = styled.button`
    font-size: 30px;
    color: ${theme.colors.accent};
    margin-right: 46px;
    display: flex;
    gap: 40px;
    svg {
        transition: ${theme.animations.transition};
    }
    
    &:hover {
        svg {
            transform: translateX(10px);
        }
    }
`
const BoxButton = styled.div`
    
`

export const S = {
    StyledBoxEmail,
    Field,
    SendButton,
    BoxButton,
}