import { Box } from '../components/Box';
import ProductList from '../components/ProductList';
import ShopList from '../components/ShopList';

function ShopsPage() {
  return (
    <Box display="flex">
      <ShopList />
      <ProductList />
    </Box>
  );
}

export default ShopsPage;
