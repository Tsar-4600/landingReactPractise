import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products = [] }) => {
  if (!products.length) {
    return <div>Товары скоро появятся</div>;
  }

  return (
    <Grid
      templateColumns={{
         base: "repeat(auto-fill, minmax(280px, 1fr))"
               
      }}
      gap={6}
    >
      {products.map((product) => (
        <GridItem key={product.model || product.name}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductList;
