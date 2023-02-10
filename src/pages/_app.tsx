import React from "react";
import { AppProps } from "next/app";
import { InstagramLogo } from "phosphor-react";

import { globalStyles } from "@/styles/global";

import logoPng from "@/assets/logo.png";

import { Container, Footer, Header } from "@/styles/pages/app";
import Image from "next/image";

globalStyles();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Container>
      <Header>
        <h1>
          <Image src={logoPng} alt="" />
        </h1>

        <a
          href="https://www.instagram.com/visionaryheadsnft/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo />
        </a>
      </Header>
      <Component {...pageProps} />
      <Footer>
        <p>©2023 - Visionary Heads NFTs. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default MyApp;
