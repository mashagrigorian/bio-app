import React, { useState } from "react";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import WorkIcon from "@mui/icons-material/Work";
// import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown } from "react-bootstrap";

import "./header.css";

const Header = () => {
  // const [show, setShow] = useState(false);
  // const showDropdown = (e) => {
  //   setShow(!show);
  // };
  // const hideDropdown = (e) => {
  //   setShow(false);
  // };
  const [sidebar, setSidebar] = useState(false);

  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".header");
  //   header.classList.toggle("active", window.scrollY > 200);
  // });
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src="assets/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <div className="App">
                {/* <Navbar bg="dark" variant="dark"> */}
                {/* <Navbar.Brand>Logo</Navbar.Brand> */}
                <Nav>
                  <NavDropdown
                    // show={show}
                    // onMouseEnter={showDropdown}
                    // onMouseLeave={hideDropdown}
                    renderMenuOnMount={true}
                    title="Մեր մասին"
                  >
                    <NavDropdown.Item href="about/history">
                      Պատմություն
                    </NavDropdown.Item>
                    <NavDropdown.Item href="about/our-capabilities">
                      Մեր կարողությունները
                    </NavDropdown.Item>
                    <NavDropdown.Item href="about/our-priorities">
                      Մեր առաջնահերթությունները
                    </NavDropdown.Item>
                    <NavDropdown.Item href="about/our-team">
                      Մեր թիմը
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="partners">Մեր գործընկերները</Nav.Link>

                  <NavDropdown
                    // show={show}
                    // onMouseEnter={showDropdown}
                    // onMouseLeave={hideDropdown}
                    renderMenuOnMount={true}
                    title="Մեր ձեռքբերումները"
                  >
                    <NavDropdown.Item href="achievements/accreditations">
                      Մեր հավատարմագրումները
                    </NavDropdown.Item>
                    <NavDropdown.Item href="achievements/capacity-assessment">
                      Մեր կարողությունների գնահատումը
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    // show={show}
                    // onMouseEnter={showDropdown}
                    // onMouseLeave={hideDropdown}
                    renderMenuOnMount={true}
                    title="Ծրագրեր"
                  >
                    <NavDropdown.Item href="projects/completed-projects">
                      Իրականացված ծրագրեր
                    </NavDropdown.Item>
                    <NavDropdown.Item href="projects/current-projects">
                      Ընթացիկ ծրագրեր
                    </NavDropdown.Item>
                    <NavDropdown.Item href="projects/planned-projects">
                      Նախատեսվող ծրագրեր
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    // show={show}
                    // onMouseEnter={showDropdown}
                    // onMouseLeave={hideDropdown}
                    renderMenuOnMount={true}
                    title="Արդյունքներ"
                  >
                    <NavDropdown.Item href="results/beneficiaries">
                      Շահառուներ
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    // show={show}
                    // onMouseEnter={showDropdown}
                    // onMouseLeave={hideDropdown}
                    renderMenuOnMount={true}
                    title="Գնումներ"
                  >
                    <NavDropdown.Item href="custom/procurement-under-the-programs">
                      Ծրագրերի շրջանակներում իրականացվող գնումներ
                    </NavDropdown.Item>
                    <NavDropdown.Item href="custom/procurement-for-the-office-needs">
                      Գնումներ գրասենյակի կարիքների համար
                    </NavDropdown.Item>
                    <NavDropdown.Item href="custom/announcements">
                      Հայտարարություններ
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    // show={show}
                    // onMouseEnter={showDropdown}
                    // onMouseLeave={hideDropdown}
                    renderMenuOnMount={true}
                    title="Նորություններ"
                  >
                    <NavDropdown.Item href="news/news">Լրահոս</NavDropdown.Item>
                    <NavDropdown.Item href="news/the-press-about-us">
                      Մամուլը մեր մասին
                    </NavDropdown.Item>
                    <NavDropdown.Item href="news/video-gallery">
                      Տեսադարան
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    // show={show}
                    // onMouseEnter={showDropdown}
                    // onMouseLeave={hideDropdown}
                    renderMenuOnMount={true}
                    title="Կապ"
                  >
                    <NavDropdown.Item href="contact/contacts">
                      Նամակի ձև
                    </NavDropdown.Item>
                    <NavDropdown.Item href="contact/contacts">
                      Մեր հասցեն
                    </NavDropdown.Item>
                    <NavDropdown.Item href="contact/contacts">
                      Կոնտակտներ
                    </NavDropdown.Item>
                    <NavDropdown.Item href="contact/contacts">
                      Թեժ գիծ
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* </Navbar> */}
              </div>
              {/* <li>
                <Link to={"/"}>Մեր մասին</Link>
              </li>
              <li>
                <Link to={"/partners"}>Մեր գործընկերները</Link>
              </li>
              <li>
                <Link to={"/accreditations"}>Մեր հավատարմագրումները</Link>
              </li>
              <li>
                <Link to={"/projects"}>Ծրագրեր</Link>
              </li>
              <li>
                <Link to={"/custom"}>Գնումներ</Link>
              </li>
              <li>
                <Link to={"/news"}>Նորություններ</Link>
              </li>
              <li>
                <Link to={"/contact"}>Կապ</Link>
              </li> */}
              {/* <li className="icon">
                <SearchOutlinedIcon className="headerIcon" />
                <WorkIcon className="headerIcon" />
                <GridViewIcon className="headerIcon" />
              </li> */}
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
