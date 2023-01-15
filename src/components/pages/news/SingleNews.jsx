import { Container, Paper } from "@mui/material";
import React, { useEffect } from "react";
import gsap from "gsap";

const SingleNews = () => {
  useEffect(() => {
    const divs = document.querySelectorAll(".single-news");
    gsap.set(divs[1], { x: 100, opacity: 1 });

    gsap
      .timeline({ defaults: { duration: 3 } })
      .add("three")
      .to(divs[0], { y: 0, x: 10, opacity: 1 }, "three")
      .to(divs[1], { y: 0, x: 0, opacity: 0.05 }, "three")
      .to(divs[2], { y: 0, x: 10, opacity: 0.05 }, "three")
      .to(divs[3], { y: 0, x: 0, opacity: 0.05 }, "three")
      .to(divs[4], { y: 0, x: 10, opacity: 0.07 }, "three")
      .to(divs[5], { y: 0, x: 10, opacity: 0.07 }, "three")
      .to(divs[6], { y: 0, x: 0, opacity: 0.07 }, "three")
      .to(divs[7], { y: 0, x: 10, opacity: 1.02 }, "three")
      .to(divs[8], { y: 0, x: 0, opacity: 1.02 }, "three");
  });

  return (
    <>
      <Container
        component={Paper}
        elevation={5}
        style={{
          padding: 15,
          lineHeight: "3em",
        }}
      >
        <div className="single-news">
          <h1 style={{ color: "rgb(19, 139, 67)" }}>Lorem Ipsum</h1>
          <h3
            style={{
              fontWeight: "normal",
              padding: 15,
              lineHeight: "2em",
            }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </h3>
        </div>
      </Container>
    </>
  );
};

export default SingleNews;
