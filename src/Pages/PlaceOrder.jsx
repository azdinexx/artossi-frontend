import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import ShippingCard from '../components/ShippingCard';
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
import CartItem from '../components/cartItem';
import { useSelector } from 'react-redux';
//get cart items from redux store

//get shipping address from local storage
//get payment method from local storage
//get order items from redux store

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  console.log(paymentMethod);
  const handlePlaceOrder = () => {
    // Handle place order logic here
  };

  return (
    <Container maxWidth='sm'>
      <Root>
        <Divider>Order Items</Divider>
        <div
          style={{
            padding: '1rem',
          }}
        >
          {cartItems.map((item) => (
            <CartItem key={item.product} item={item} />
          ))}
        </div>
        <Divider textAlign='center'>Total</Divider>
        <div style={{ padding: '1rem' }}>
          <h1>
            {`$ ${cartItems
              .reduce((acc, item) => acc + item.price * item.qty, 0)
              .toFixed(2)}`}
          </h1>
        </div>
        <Divider>
          <Chip label='Shipping Address' />
        </Divider>
        <ShippingCard shipping={shippingAddress} />
        <Divider>
          <Chip label='Payment Method' />
        </Divider>
        <h1>{paymentMethod.paymentMethod}</h1>
      </Root>
    </Container>
  );
};

export default PlaceOrder;
