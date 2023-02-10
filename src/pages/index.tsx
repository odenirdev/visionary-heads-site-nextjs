import React from "react";
import Head from "next/head";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { Product } from "@/components/Product";

import { HomeContainer } from "@/styles/pages/home";
import { products } from "@/config/products";

const Home: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },

    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
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
        {products.map((product) => (
          <div className="keen-slider__slide" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </HomeContainer>
    </>
  );
};

export default Home;
