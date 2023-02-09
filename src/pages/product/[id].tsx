import { useRouter } from "next/router";

const Product: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  return <div>Product {id}</div>;
};

export default Product;
