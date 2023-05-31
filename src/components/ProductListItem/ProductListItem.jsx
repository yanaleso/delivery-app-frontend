import { FaCartPlus } from 'react-icons/fa';
import { Button } from './ProductListItem.styled';
import { Box } from '../Box';

function ProductListItem({ product: { name, description, price, imageUrl } }) {
  return (
    <Box>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <Button type="button">
        <FaCartPlus size={20} />
      </Button>
    </Box>
  );
}

export default ProductListItem;
