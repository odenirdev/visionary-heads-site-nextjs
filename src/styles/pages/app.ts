import { styled } from "..";

import instagramBg from "@/assets/instagramBg.png";
import twitterBg from "@/assets/twitterBg.png";
import discordBg from "@/assets/discordBg.png";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 1rem",
  width: "100%",
  maxWidth: 1180,
  marginInline: "auto",

  "section:first-child": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",

    "& > div": {
      display: "flex",
      gap: "1rem",
    },
  },

  "section:last-child": {
    marginTop: "3rem",

    h2: {
      marginBottom: "2rem",
    },

    p: {
      marginBottom: "1rem",
    },
  },

  img: {
    width: "10rem",
    height: "auto",
    objectFit: "contain",
  },

  a: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$white",
    fontSize: 44,
    borderRadius: 8,

    "&.instagram": {
      backgroundImage: `url(${instagramBg.src})`,
    },

    "&.twitter": {
      backgroundImage: `url(${twitterBg.src})`,
    },

    "&.discord": {
      backgroundImage: `url(${discordBg.src})`,
    },
  },
});

export const Footer = styled("footer", {
  width: "100%",
  maxWidth: 1180,
  marginInline: "auto",
  padding: "2rem 1rem",
});
