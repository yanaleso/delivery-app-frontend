// import { useShoppingCart } from '../../context/ShoppingCartContext';
// import { formatCurrency } from "../utilities/formatCurrency"
// import { CartItem } from './CartItem';
// import storeItems from '../data/items.json';

function ShoppingCart({ isOpen }) {
  // const { cartItems } = useShoppingCart();
  return (
    <ul>
      {/* {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="ms-auto fw-bold fs-5">
        Total{' '}
        {cartItems.reduce((total, cartItem) => {
          const item = storeItems.find(i => i.id === cartItem.id);
          return total + (item?.price || 0) * cartItem.quantity;
        }, 0)}
      </div> */}
    </ul>
  );
}

export default ShoppingCart;
