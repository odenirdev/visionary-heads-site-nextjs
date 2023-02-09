import React from "react";
import { AppProps } from "next/app";
import { InstagramLogo } from "phosphor-react";

import { globalStyles } from "@/styles/global";

import logoSvg from "@/assets/logo.svg";

import { Container, Header } from "@/styles/pages/app";

globalStyles();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Container>
      <Header>
        <h1>Visionary Heads NFTs</h1>

        <a
          href="https://www.instagram.com/visionaryheadsnft/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo />
        </a>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
