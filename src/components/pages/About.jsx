import React from "react";
import {useTranslation} from "react-i18next";
import {Container} from "@mui/material";

const About = () => {
    const {t, i18n} = useTranslation();
    return (
        <Container>
            <div dangerouslySetInnerHTML={
                {__html : t('ourHistory', {interpolation : {escapeValue : false}})}
            }/>
        </Container>
    );
};

export default About;
