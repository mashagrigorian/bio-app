import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";

const Priorities = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div
        dangerouslySetInnerHTML={{
          __html: t("our-priorities", {
            interpolation: { escapeValue: false },
          }),
        }}
      />
    </Container>
  );
};

export default Priorities;
