import React from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "@/styles/pages/home";
import Head from "next/head";

const Home: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },

    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },

      "(max-width: 320px)": {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Visionary Heads NFTs</title>

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image
            loader={() =>
              "https://cdn.discordapp.com/attachments/770044750459699200/1073284476639129620/insta_pic_1.png"
            }
            src="https://cdn.discordapp.com/attachments/770044750459699200/1073284476639129620/insta_pic_1.png"
            alt=""
            width={520}
            height={520}
          />

          <footer>
            <strong>Visionary Heads 1</strong>

            <span>352.250 ETH</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image
            loader={() =>
              "https://cdn.discordapp.com/attachments/770044750459699200/1073284477104689212/insta_pic_2.png"
            }
            src="https://cdn.discordapp.com/attachments/770044750459699200/1073284477104689212/insta_pic_2.png"
            alt=""
            width={520}
            height={480}
          />

          <footer>
            <strong>Visionary Heads 2</strong>

            <span>352.250 ETH</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image
            loader={() =>
              "https://cdn.discordapp.com/attachments/770044750459699200/1073284477477986345/insta_pic_3.png"
            }
            src="https://cdn.discordapp.com/attachments/770044750459699200/1073284477477986345/insta_pic_3.png"
            alt=""
            width={520}
            height={480}
          />

          <footer>
            <strong>Visionary Heads 3</strong>

            <span>352.250 ETH</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  );
};

export default Home;
