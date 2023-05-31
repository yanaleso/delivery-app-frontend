import ShopListItem from '../ShopListItem';
import { getShops } from '../../../fakeApi';
import { Container, Item } from './ShopList.styled';
import { Box } from '../Box';

function ShopList() {
  const shops = getShops();

  return (
    <Box maxWidth="300px">
      <Container>
        {shops.map(shop => (
          <Item key={shop.id}>
            <ShopListItem shop={shop} />
          </Item>
        ))}
      </Container>
    </Box>
  );
}

export default ShopList;
