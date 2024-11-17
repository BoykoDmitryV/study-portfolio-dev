import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
    background: ${theme.colors.secondaryBg};
`

const ContactsBox = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media ${theme.media.tablet} {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

export const S = {
    Contacts,
    ContactsBox
}