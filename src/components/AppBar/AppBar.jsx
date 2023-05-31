import Navigation from '../Navigation';
import { Header } from './AppBar.styled';
// import UserMenu from '../UserMenu';
// import AuthNav from '../AuthNav';
// import { useAuth } from 'hooks';

function AppBar() {
  //   const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
}

export default AppBar;
