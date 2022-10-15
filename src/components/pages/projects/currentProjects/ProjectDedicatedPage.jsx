import {Container, Paper} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {itemData} from './CurrentProjects';

const Project = (props) => {
    const { id } = useParams();
    const {t, i18n} = useTranslation();

    const data = itemData.find((i)=>{
        return i.key ===id
    })

    return (
        <Container
            component={Paper}
            elevation={5}
            style={{padding: 25, marginTop: 40}}
        >
            <div>
                <b>{t("currentProject1")}</b>

                <br/>
                <br/>
                <h4>{t("tags")}</h4>
                {/* {t("project1tag")} */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: t("project1tag", {
                            interpolation: {escapeValue: false},
                        }),
                    }}
                />
                <br/>
                <br/>
                <h4>{t("funding")}</h4>
                {t("funding1")}
                <br/>
                <br/>
                <h4>{t("budget")}</h4>
                {t("budget1")}
                <br/>
                <br/>
                <h4>{t("dates")}</h4>
                {t("dates1")}
                <br/>
                <br/>
                <h4>{t("areas")}</h4>
                {t("areas1")}
                <br/>
                <br/>
                <h4>{t("objective")}</h4>
                {t("objective1")}
                <br/>
                <br/>
                <h4>{t("projectActivities")}</h4>
                {/* {t("projectActivities1")} */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: t("projectActivities1", {
                            interpolation: {escapeValue: false},
                        }),
                    }}
                />
                <br/>
                <br/>
                <h4>{t("documents")}</h4>
                {t("documentsDescription")}
            </div>
        </Container>
    );
};

export default Project;
