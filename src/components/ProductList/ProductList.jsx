import ProductListItem from '../ProductListItem';
import { getShopById } from '../../../fakeApi';
import { Container, Item } from './ProductList.styled';
import { Box } from '../Box';

function ProductList() {
  const { products } = getShopById(1);

  return (
    <Box flexGrow={6} pl={5}>
      <Container>
        {products.map(product => (
          <Item key={product.id}>
            <ProductListItem product={product} />
          </Item>
        ))}
      </Container>
    </Box>
  );
}

export default ProductList;
