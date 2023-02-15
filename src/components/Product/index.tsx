import Image from "next/image";
import React from "react";
import { ProductContainer } from "./styles";

// import { Container } from './styles';

export interface IProductsProps {
  id: string;
  image: string;
  name?: string;
  value?: string;
}

export const Product: React.FC<IProductsProps> = ({ image, name, value }) => {
  return (
    <ProductContainer>
      <Image loader={() => image} src={image} alt="" width={520} height={520} />

      {name && (
        <footer>
          <strong>{name}</strong>

          <span>{value}</span>
        </footer>
      )}
    </ProductContainer>
  );
};
