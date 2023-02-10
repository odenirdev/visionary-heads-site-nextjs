import { styled } from "..";

import iconsBg from "@/assets/iconsBg.png";

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
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",

  img: {
    width: "7rem",
    height: "auto",
    objectFit: "contain",
  },

  a: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$white",
    fontSize: 44,
    backgroundImage: `url(${iconsBg.src})`,
    borderRadius: 8,
  },
});

export const Footer = styled("footer", {
  width: "100%",
  maxWidth: 1180,
  marginInline: "auto",
  padding: "2rem 1rem",
});
