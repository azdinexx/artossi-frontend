import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import Products from './Pages/Products';
import ViewProduct from './Pages/ViewProduct';
import NotFound from './Pages/NotFound';
import Cart from './Pages/cart';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Shipping from './Pages/Shipping';
import PaymentMethod from './Pages/PaymentMethod.jsx';
import PlaceOrder from './Pages/PlaceOrder.jsx';
import StepperLayout from './Layout/StepperLayout.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route index element={<Home />} />
        <Route path='products'>
          <Route index element={<Products />} />
          <Route path=':id' element={<ViewProduct />} />
        </Route>
        <Route path='cart/:id?' element={<Cart />}></Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

{
  /* <Route element={<StepperLayout />}>
<Route path='/shipping' element={<Shipping />} />
<Route path='/payment' element={<PaymentMethod />} />
<Route path='/place-order' element={<PlaceOrder />} />
</Route> */
}
