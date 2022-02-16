import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  //{
  //GermanTitle: "StartseiteV1",
  //EnglishTitle: "Homev1",
  //path: "/",
  //icon: <AiIcons.AiFillHome />,
  //cName: "nav-text",
  //}, it is linked to Homev1.js
  {
    GermanTitle: "Startseite",
    EnglishTitle: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // it is linked to Home.js
  {
    GermanTitle: "Über mich",
    EnglishTitle: "About",
    path: "/about",
    icon: <IoIcons.IoMdPerson />,
    cName: "nav-text",
  },
  {
    GermanTitle: "Portfolio",
    EnglishTitle: "Works",
    path: "/works",
    icon: <MdIcons.MdHomeWork />,
    cName: "nav-text",
  },
  {
    GermanTitle: "Workflow",
    EnglishTitle: "Workflow",
    path: "/workflow",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    GermanTitle: "Preise",
    EnglishTitle: "Prices",
    path: "/prices",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    GermanTitle: "Kontakt",
    EnglishTitle: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
