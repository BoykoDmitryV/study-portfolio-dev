import React, {ElementRef, useRef} from 'react';
import {Information} from "../../../../components/Information";
import {S} from './BoxEmail_Styles'
import {Icon} from "../../../../components/icon/Icon";
import emailjs from '@emailjs/browser';

export const BoxEmail: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_4isr1th', 'template_8fw3ohc', form.current, {
                publicKey: 'HJDKzj0M5aE1QYZM-',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.StyledBoxEmail ref={form} onSubmit={sendEmail}>
            <Information title={"Your name:"}/>
            <S.Field required aria-label="Your name" name={'from_name'}/>
            <Information title={"Your email  address:"}/>
            <S.Field required aria-label="Your email  address" name={'user_email'}/>
            <Information title={"Tell about the project:"}/>
            <S.Field required aria-label="Tell about the project" name={'message'}/>
            <S.SendButton type={'submit'}>Send
                <Icon width={"40"}
                      height={"40"}
                      viewBox={"0 0 40 40"}
                      iconId={"arrow-right"}
                />
            </S.SendButton>
        </S.StyledBoxEmail>
    );
};


