import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { DiscordLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

import { globalStyles } from "@/styles/global";

import logoPng from "@/assets/logo.png";
import openSeaSvg from "@/assets/openSea.svg";

import { Container, Footer, Header } from "@/styles/pages/app";
import Image from "next/image";

globalStyles();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    document.querySelector(
      "#wallet-btn"
    )!.innerHTML = `<nftart-mint-button address="0x7F67DB38F6622b2E4064832b88F2CCf59981E578" chainId="1"></nftart-mint-button>`;
  }, []);

  return (
    <Container>
      <Header>
        <section>
          <h1>
            <Image src={logoPng} alt="" />
          </h1>

          <span id="wallet-btn"></span>

          <div>
            <a
              href="https://opensea.io/collection/visionary-heads"
              target="_blank"
              rel="noopener noreferrer"
              className="openSea"
            >
              <Image src={openSeaSvg} alt="" />
            </a>

            <a
              href="https://www.instagram.com/visionaryheadsnft/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <InstagramLogo />
            </a>

            <a
              href="https://twitter.com/visionary_heads"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <TwitterLogo />
            </a>

            <a
              href="https://discord.gg/52Dh5xDpHM"
              target="_blank"
              rel="noopener noreferrer"
              className="discord"
            >
              <DiscordLogo />
            </a>
          </div>
        </section>

        <section>
          <div>
            <h2>Hello Friends!</h2>

            <p>
              {`We are excited to share with you our brand new digital collection,
              a collab between two talented brazilian artists. Tripa Seca that
              brings to life full-of-personality avatars, and Lucca Poliandri
              who creates trippy background arts.`}
            </p>

            <p>
              {`Explore 5,000 unique avatars generated from more than 150 unique
              assets, marked by the traits of Tripa Seca. Complementing these
              avatars are 33 psychedelic backgrounds, each a digital
              reinterpretation of Lucca's physical acrylic and paint artwork.`}
            </p>

            <p>
              {`The avatars have been intentionally designed in black and white to
              highlight the vibrancy of the backgrounds and showcase both
              artists' works to the fullest.`}
            </p>

            <p>
              {`Our goal is to connect with individuals who appreciate visionary
              art and are interested in exploring the potential of NFTs and the
              Web3 world.`}
            </p>

            <p>
              {`To build this community, we have created a space on Discord where
              you can join us. Don’t miss this historic opportunity to be part
              of our NFT art collection. So tell us, what’s your visionary head?`}
            </p>
          </div>
        </section>
      </Header>

      <Component {...pageProps} />

      <Footer>
        <p>©2023 - Visionary Heads. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default MyApp;
