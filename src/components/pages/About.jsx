import React from "react";
import {useTranslation} from "react-i18next";
import {Container, Paper} from "@mui/material";

const About = () => {
    const {t, i18n} = useTranslation();
    return (
        <Container component={Paper} elevation={5} style={{padding : 25}}>
            <div dangerouslySetInnerHTML={
                {__html : t('ourHistory', {interpolation : {escapeValue : false}})}
            }/>
        </Container>
    );
};

export default About;
