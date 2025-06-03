import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineBulb,
  AiOutlineGlobal,
} from "react-icons/ai";
import "../../src/style.css"; // تأكد إن فيه CSS للوضعين الداكن والفاتح

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    light: "Light Mode",
    dark: "Dark Mode",
    switchToArabic: "عربي",
    switchToEnglish: "English",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    light: "الوضع الفاتح",
    dark: "الوضع الداكن",
    switchToArabic: "عربي",
    switchToEnglish: "English",
  },
};

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) updateNavbar(true);
    else updateNavbar(false);
  }

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    document.body.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
  }, [darkMode, language]);

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <h2>
            Shark <br /> <span className="h5">Office</span>
          </h2>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t.home}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t.about}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/services"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                {t.services}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ marginLeft: "10px" }}>
              <Button
                variant={darkMode ? "light" : "dark"}
                onClick={() => setDarkMode(!darkMode)}
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <AiOutlineBulb />
                {darkMode ? t.light : t.dark}
              </Button>
            </Nav.Item>

            <Nav.Item style={{ marginLeft: "10px" }}>
              <Button
                variant="secondary"
                onClick={toggleLanguage}
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <AiOutlineGlobal />
                {language === "en" ? t.switchToArabic : t.switchToEnglish}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
