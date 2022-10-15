// import { Image } from "@mui/icons-material";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   Paper,
//   Typography,
// } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import projects from "./currentProjectsImages";

// function App() {
//   const { t, i18n } = useTranslation();
//   const styles = {
//     media: {
//       height: 0,
//       paddingTop: "56.25%", // 16:9,
//       marginTop: "30",
//     },
//   };
//   return (
//     <>
//       <Card
//         style={{
//           width: 400,
//           height: 400,
//           marginLeft: 200,
//           marginTop: 200,
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{
//             width: 400,
//             height: 400,
//             maxHeight: { xs: 233, md: 167 },
//             maxWidth: { xs: 350, md: 250 },
//           }}
//           src={projects.project1}
//         />
//         <CardHeader
//           title={t("project1tag")}
//           subheader={t("currentProject5")}
//           action
//         ></CardHeader>
//         <CardContent>
//           <Typography>{t("currentProject1")}</Typography>
//         </CardContent>
//       </Card>
//       <Card
//         style={{
//           width: 400,
//           height: 400,
//           marginLeft: 200,
//           marginTop: 200,
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{
//             width: 400,
//             height: 400,
//             maxHeight: { xs: 233, md: 167 },
//             maxWidth: { xs: 350, md: 250 },
//           }}
//           src={projects.project1}
//         />
//         <CardHeader
//           title={t("project1tag")}
//           subheader={t("currentProject5")}
//           action
//         ></CardHeader>
//         <CardContent>
//           <Typography>{t("currentProject1")}</Typography>
//         </CardContent>
//       </Card>
//       <Card
//         style={{
//           width: 400,
//           height: 400,
//           marginLeft: 200,
//           marginTop: 200,
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{
//             width: 400,
//             height: 400,
//             maxHeight: { xs: 233, md: 167 },
//             maxWidth: { xs: 350, md: 250 },
//           }}
//           src={projects.project1}
//         />
//         <CardHeader
//           title={t("project1tag")}
//           subheader={t("currentProject5")}
//           action
//         ></CardHeader>
//         <CardContent>
//           <Typography>{t("currentProject1")}</Typography>
//         </CardContent>
//       </Card>
//     </>
//   );
// }

// export default App;

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import {useTranslation} from "react-i18next";
import projects from "./currentProjectsImages";
import {Link} from "react-router-dom";

function TitlebarImageList() {
    const {t, i18n} = useTranslation();

    return (
        <ImageList>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div" style={{textAlign: "center"}}>
                    {t("currentProjects")}
                </ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <Link to={"/projects/current-projects/" + item.key}>
                    <ImageListItem key={item.img} style={{
                        position: 'relative'
                    }}>
                        {/*<div>{t(`currentProject.${item.key}.title`)}</div>*/}
                        <div style={{position: "absolute", left: 20, top: 20, background: 'green'}}>{item.status}
                        </div>
                        <div style={{
                            position: "absolute",
                            right: 20,
                            top: 20,
                            background: 'green'
                        }}>{item.tags?.map((tag) => {
                            return <div>{tag}</div>
                        })}
                        </div>

                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                        />
                        <ImageListItemBar title={item.title} subtitle={item.author}/>
                    </ImageListItem>
                </Link>
            ))}
        </ImageList>
    );
}

export const itemData = [
    {
        key: "project1",
        img: projects.project1,
        title: "funding2",
        author: "@bkristastuchio",
        status: 'ongoing',
        tags: ['item1', 'item2']
        // rows: 2,
        // cols: 2,
        // featured: true,
    },
    {
        img: projects.project2,
        title: "Burger",
        author: "@rollelflex_graphy726",
    },
    {
        img: projects.project3,
        title: "Camera",
        author: "@helloimnik",
    },
    {
        img: projects.project4,
        title: "Coffee",
        author: "@nolanissac",
        cols: 2,
    },
    {
        img: projects.project5,
        title: "Hats",
        author: "@hjrc33",
        cols: 2,
    },
    {
        img: projects.project6,
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
    },
];

export default TitlebarImageList;

// import { Container, Divider, Grid, Stack, Paper } from "@mui/material";
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { Routes, Router, Route } from "react-router";
// import { BrowserRouter, Link } from "react-router-dom";
// import "./currentProjects.css";
// import projects from "./currentProjectsImages";

// const CurrentProjects = () => {
//   const { t, i18n } = useTranslation();

//   return (
//     <>
//       <Grid container>
//         <Grid item xs={2} md={6} lg={4} sm={2}>
// <div className="container-project">
//   <article className="article">
//     <picture className="picture">
//       <source media="(min-width: 0px)" srcSet={projects.project1} />
//       <a href="./current-projects/project1" target="_blank">
//         <img
//           src={projects.project1}
//           alt="background"
//           className="photo"
//         />{" "}
//       </a>
//       <h1 className="tag">{t("project1tag")}</h1>{" "}
//       <h1 className="description">{t("currentProject1")}</h1>
//       <h1 className="funding">{t("funding1")}</h1>
//     </picture>
//   </article>
// </div>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4} sm={2}>
//           <div className="container-project">
//             <article className="article">
//               <picture className="picture">
//                 <source media="(min-width: 0px)" srcSet={projects.project2} />
//                 <a href="./current-projects/project2" target="_blank">
//                   <img
//                     src={projects.project2}
//                     alt="background"
//                     className="photo"
//                   />
//                 </a>
//                 <h1 className="tag2">{t("project2tag")}</h1>
//                 <h1 className="description2">{t("currentProject2")}</h1>
//                 <h1 className="funding2">{t("funding2")}</h1>
//               </picture>
//             </article>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4} sm={2}>
//           <div className="container-project">
//             <article className="article">
//               <picture className="picture">
//                 <source media="(min-width: 0px)" srcSet={projects.project3} />
//                 <a href="./current-projects/project3" target="_blank">
//                   <img
//                     src={projects.project3}
//                     alt="background"
//                     className="photo"
//                   />
//                 </a>
//                 <h1 className="tag3">{t("project3tag")}</h1>
//                 <h1 className="description3">{t("currentProject3")}</h1>
//                 <h1 className="funding3">{t("funding3")}</h1>
//               </picture>
//             </article>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4} sm={2}>
//           <div className="container-project">
//             <article className="article">
//               <picture className="picture">
//                 <source media="(min-width: 0px)" srcSet={projects.project4} />
//                 <a href="./current-projects/project4" target="_blank">
//                   <img
//                     src={projects.project4}
//                     alt="background"
//                     className="photo"
//                   />
//                 </a>
//                 <h1 className="tag4">{t("project4tag")}</h1>
//                 <h1 className="description4">{t("currentProject4")}</h1>
//                 <h1 className="funding4">{t("funding4")}</h1>
//               </picture>
//             </article>
//           </div>
//         </Grid>

//         <Grid item xs={12} md={6} lg={4} sm={2}>
//           <div className="container-project">
//             <article className="article">
//               <picture className="picture">
//                 <source media="(min-width: 0px)" srcSet={projects.project5} />
//                 <a href="./current-projects/project5" target="_blank">
//                   <img
//                     src={projects.project5}
//                     alt="background"
//                     className="photo"
//                   />
//                 </a>
//                 <h1 className="tag5">{t("project5tag")}</h1>
//                 <h1 className="description5">{t("currentProject5")}</h1>
//                 <h1 className="funding5">{t("funding5")}</h1>
//               </picture>
//             </article>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4} sm={2}>
//           <div className="container-project">
//             <article className="article">
//               <picture className="picture">
//                 <source media="(min-width: 0px)" srcSet={projects.project6} />
//                 <a href="./current-projects/project6" target="_blank">
//                   <img
//                     src={projects.project6}
//                     alt="background"
//                     className="photo"
//                   />
//                 </a>
//                 <h1 className="tag6">{t("project6tag")}</h1>
//                 <h1 className="description6">{t("currentProject6")}</h1>
//                 <h1 className="funding6">{t("funding6")}</h1>
//               </picture>
//             </article>
//           </div>
//         </Grid>
//       </Grid>
//       {/* </div>
//           </Stack>
//         </div>
//       </Container> */}
//     </>
//   );
// };

// export default CurrentProjects;
