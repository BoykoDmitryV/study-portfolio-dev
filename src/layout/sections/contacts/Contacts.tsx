import React from 'react';
import {Social} from "./social/Social";
import {BoxEmail} from "./boxEmail/BoxEmail";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles'

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <S.ContactsBox>
                    <Social/>
                    <BoxEmail/>
                </S.ContactsBox>
            </Container>
        </S.Contacts>
    );
};
