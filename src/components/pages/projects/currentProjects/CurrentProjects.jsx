// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { itemData } from "./ItemData";
// // // import { Container, Paper, Grid } from "@mui/material";
// // import Box from "@mui/material/Box";
// // import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   height: 60,
//   lineHeight: "60px",
// }));

// const lightTheme = createTheme({ palette: { mode: "light" } });

// const CurrentProjects = () => {
//   const { t, i18n } = useTranslation();

//   return (
//     <>
//       <div style={{ marginTop: "10%" }}>
//         {/* <Container
//           component={Paper}
//           elevation={5}
//           style={{
//             padding: 15,
//             marginTop: 60,
//           }}
//         > */}
//         <Grid container spacing={2}>
//           {[lightTheme].map((theme, index) => (
//             <Grid item xs={6} key={index}>
//               <ThemeProvider theme={theme}>
//                 <Box
//                   sx={{
//                     p: 2,
//                     bgcolor: "background.default",
//                     // display: "grid",
//                     gridTemplateColumns: { md: "2fr 1fr" },
//                     gap: 2,
//                   }}
//                 >
//                   <ImageList
//                     gap={20}
//                     sx={{
//                       mb: 8,
//                     }}
//                     style={{
//                       display: "flex",
//                       flexWrap: "wrap",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {itemData.map((item) => (
//                       <Link to={"/projects/current-projects/" + item.key}>
//                         <ImageListItem
//                           key={item.img}
//                           style={{
//                             position: "relative",
//                           }}
//                         >
//                           <div
//                             style={{
//                               position: "absolute",
//                               left: 7,
//                               top: 5,
//                               background: "white",
//                               opacity: "0.70",
//                               color: "black",
//                               fontWeight: "bold",
//                               borderRadius: "3px",
//                               padding: "3px 5px",
//                             }}
//                           >
//                             <div>
//                               {t(`allCurrentProject.${item.key}.projectTag`)}
//                             </div>
//                           </div>
//                           <img
//                             style={{
//                               width: "550px",
//                               height: "500px",
//                             }}
//                             src={`${item.img}?w=248&fit=crop&auto=format`}
//                             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                             alt={item.title}
//                           />
//                           <div
//                             style={{
//                               position: "absolute",
//                               left: 7,
//                               bottom: 30,
//                               background: "white",
//                               opacity: "0.70",
//                               color: "black",
//                               borderRadius: "3px",
//                               fontWeight: "bold",
//                               padding: "3px 5px",
//                             }}
//                           >
//                             <div>
//                               {t(
//                                 `allCurrentProject.${item.key}.currentProject`
//                               )}
//                             </div>
//                           </div>
//                         </ImageListItem>
//                       </Link>
//                     ))}
//                   </ImageList>
//                   {/* </Container> */}
//                 </Box>
//               </ThemeProvider>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </>
//   );
// };

// export default CurrentProjects;

import * as React from "react";
import {itemData} from "./ItemData";
import {Link} from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";
import {useTranslation} from "react-i18next";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";

const CurrentProjects = () => {
    const {t, i18n} = useTranslation();

    return (
        <div style={{marginTop: "8%"}}>
            <ImageList
                gap={100}
                sx={{

                    pt:15,
                    pb:15
                }}
                style={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {/* {itemData.map((item) => (
                     <Link to={"/projects/current-projects/" + item.key}>
                        <ImageListItem
                          key={item.img}
                         style={{
                            position: "relative",
                           }}
                      > */}
                {(itemData || []).map((item) => (
                    <Paper square key={item.key} elevation={15}>
                        <Link to={"/projects/current-projects/" + item.key}>
                            <ImageListItem
                                key={item.img}
                                style={{
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 7,
                                        top: 5,
                                        background: "white",
                                        opacity: "0.70",
                                        color: "black",
                                        fontWeight: "bold",
                                        borderRadius: "3px",
                                        padding: "3px 5px",
                                    }}
                                >
                                    <div>{t(`allCurrentProject.${item.key}.projectTag`)}</div>
                                </div>
                                <img
                                    style={{
                                        width: "550px",
                                        height: "500px",
                                    }}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 7,
                                        bottom: 30,
                                        right :7,
                                        background: "white",
                                        opacity: "0.70",
                                        color: "black",
                                        borderRadius: "3px",
                                        fontWeight: "bold",
                                        padding: "3px 5px",
                                    }}
                                >
                                    <div>{t(`allCurrentProject.${item.key}.currentProject`)}</div>
                                </div>
                            </ImageListItem>
                        </Link>
                    </Paper>
                ))}
                {/* </ImageListItem>
                  </Link> */}
            </ImageList>
        </div>
    );
};

export default CurrentProjects;
