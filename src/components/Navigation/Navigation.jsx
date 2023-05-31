import { Link } from './Navigation.styled';
import { Box } from '../Box';
import { IoMdCart } from 'react-icons/io';

function Navigation() {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" as="nav">
      <Link to="/">Shops</Link>
      <Link to="/orders">
        <IoMdCart size={20} />
      </Link>
      {/* {isLoggedIn && <Link to="/contacts">Contacts</Link>} */}
    </Box>
  );
}

export default Navigation;
