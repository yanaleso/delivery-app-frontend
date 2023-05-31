import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const ShopsPage = lazy(() => import('./pages/ShopsPage'));
// const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage'));

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopsPage />} />
          {/* <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
          <Route path="shops" element={<ShoppingCartPage />} />
          {/* <Route path="products/:id" element={<ProductDetails />} /> */}
        </Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
