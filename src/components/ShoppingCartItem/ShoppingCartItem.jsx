import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';

function ShoppingCartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find(i => i.id === id);
  if (item == null) return null;

  return (
    <Box display="flex" alignItems="center">
      <img
        src={item.imgUrl}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Box>
  );
}

export default ShoppingCartItem;
