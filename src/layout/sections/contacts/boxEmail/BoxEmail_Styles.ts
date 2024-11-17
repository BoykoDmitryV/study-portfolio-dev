import styled from "styled-components";
import {InfoName} from "../../../../components/Information";
import {theme} from "../../../../styles/Theme";

const StyledBoxEmail = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 35px;
    ${InfoName} {
        font-family: "Poppins", sans-serif;
    }
    //textarea {
    //    resize: none;
    //}
`

const Field = styled.input`
    width: 100%;
    font-family: "Poppins", sans-serif;
    border: 0;
    border-bottom: 1px solid ${theme.colors.font};
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.font};
    outline: none;
`

const FooterButton = styled.button`
    font-size: 30px;
    color: ${theme.colors.accent};
    margin-right: 40px;
`
const BoxButton = styled.div`
    
`

export const S = {
    StyledBoxEmail,
    Field,
    FooterButton,
    BoxButton,
}