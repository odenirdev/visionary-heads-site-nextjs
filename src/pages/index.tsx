/* eslint-disable @next/next/no-sync-scripts */
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
      perView: 3,
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
        <title>Visionary Heads</title>

        <link rel="icon" href="/favicon.ico" sizes="any" />

        <script
          type="module"
          src="https://cdn.nft-generator.art/js-sdk/v1.4.2/nft-art-generator-sdk/nft-art-generator-sdk.esm.js"
        />
        <script
          noModule
          src="https://cdn.nft-generator.art/js-sdk/v1.4.2/nft-art-generator-sdk/nft-art-generator-sdk.js"
        />
        <meta
          name="nft-art-contract-abi"
          content="W3sibmFtZSI6ImFmZmlsaWF0ZXNPZiIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W3sibmFtZSI6Im93bmVyIiwidHlwZSI6ImFkZHJlc3MiLCJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIn1dLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQyNTYiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2In1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoiYmFsYW5jZU9mIiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbeyJuYW1lIjoib3duZXIiLCJ0eXBlIjoiYWRkcmVzcyIsImludGVybmFsVHlwZSI6ImFkZHJlc3MifV0sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoidWludDI1NiIsImludGVybmFsVHlwZSI6InVpbnQyNTYifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJjb3N0IiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJ1aW50MjU2IiwiaW50ZXJuYWxUeXBlIjoidWludDI1NiJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6Im1heEZyZWVNaW50IiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJ1aW50MzIiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MzIifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJtYXhQZXJNaW50IiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJ1aW50MzIiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MzIifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJtYXhQZXJXYWxsZXQiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQzMiIsImludGVybmFsVHlwZSI6InVpbnQzMiJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6Im1pbnQiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOlt7Im5hbWUiOiJjb3VudCIsInR5cGUiOiJ1aW50MjU2IiwiaW50ZXJuYWxUeXBlIjoidWludDI1NiJ9XSwib3V0cHV0cyI6W10sInN0YXRlTXV0YWJpbGl0eSI6InBheWFibGUifSx7Im5hbWUiOiJtaW50Q29zdE9mT3duZXIiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOlt7Im5hbWUiOiJfYWRkcmVzcyIsInR5cGUiOiJhZGRyZXNzIiwiaW50ZXJuYWxUeXBlIjoiYWRkcmVzcyJ9LHsibmFtZSI6Il9jb3VudCIsInR5cGUiOiJ1aW50MjU2IiwiaW50ZXJuYWxUeXBlIjoidWludDI1NiJ9XSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJ1aW50MjU2IiwiaW50ZXJuYWxUeXBlIjoidWludDI1NiJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6Im5hbWUiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InN0cmluZyIsImludGVybmFsVHlwZSI6InN0cmluZyJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6Im9wZW4iLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6ImJvb2wiLCJpbnRlcm5hbFR5cGUiOiJib29sIn1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoib3duZXIiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6ImFkZHJlc3MiLCJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIn1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoicHJlc2FsZU1pbnQiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOlt7Im5hbWUiOiJjb3VudCIsInR5cGUiOiJ1aW50MzIiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MzIifSx7Im5hbWUiOiJwcm9vZiIsInR5cGUiOiJieXRlczMyW10iLCJpbnRlcm5hbFR5cGUiOiJieXRlczMyW10ifV0sIm91dHB1dHMiOltdLCJzdGF0ZU11dGFiaWxpdHkiOiJwYXlhYmxlIn0seyJuYW1lIjoicHJlc2FsZU9wZW4iLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6ImJvb2wiLCJpbnRlcm5hbFR5cGUiOiJib29sIn1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoicmVmZXJyYWxDYXAiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQyNTYiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2In1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoicmVmZXJyYWxNaW50IiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbeyJuYW1lIjoiY291bnQiLCJ0eXBlIjoidWludDMyIiwiaW50ZXJuYWxUeXBlIjoidWludDMyIn0seyJuYW1lIjoicmVmZXJyZXIiLCJ0eXBlIjoiYWRkcmVzcyIsImludGVybmFsVHlwZSI6ImFkZHJlc3MifV0sIm91dHB1dHMiOltdLCJzdGF0ZU11dGFiaWxpdHkiOiJwYXlhYmxlIn0seyJuYW1lIjoicmVmZXJyYWxPcGVuIiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJib29sIiwiaW50ZXJuYWxUeXBlIjoiYm9vbCJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6InJldmVhbGVkIiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJib29sIiwiaW50ZXJuYWxUeXBlIjoiYm9vbCJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6InN1cHBseSIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoidWludDI1NiIsImludGVybmFsVHlwZSI6InVpbnQyNTYifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJ0b3RhbFN1cHBseSIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoidWludDI1NiIsImludGVybmFsVHlwZSI6InVpbnQyNTYifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifV0="
        />
        <meta name="nft-art-contract-presale" content="W10=" />
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
