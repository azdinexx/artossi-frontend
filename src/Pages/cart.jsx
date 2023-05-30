/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

const Wrapper = styled.div`
  margin-top: 6rem;
  padding: 2rem;
  height: 100vh;
  width: 100vw;
  color: #363636;
  textarea {
    border: none;
  }
  table {
    margin-top: 3rem;
    margin-left: 3rem;
    font-family: arial, sans-serif;
    border-collapse: collapse;

    th {
      color: #888;
    }
    th:first-child {
      width: 18vw;
    }
    th:last-child {
      width: 6vw;
    }
    tr > td:last-child {
      width: 6vw;
    }
    td,
    th {
      border-bottom: 1px solid #dddddd;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      width: 12vw;
    }
    tr {
      display: flex;
    }

    tr td img {
      width: 50px;
    }

    #productCell {
      justify-content: start;
      gap: 1rem;
      width: 18vw;

      span {
        font-weight: 600;
        text-transform: capitalize;
      }
    }
  }

  .summary {
    position: absolute;
    height: 415px;
    width: 320px;
    right: 2rem;
    top: 10rem;
    background-color: #e9e9e9;
    color: #888;
    padding: 1.5rem 1rem;

    h1 {
      font-size: 1.6rem;
      padding-left: 2rem;
      font-weight: 400;
      margin-bottom: 2rem;
    }

    .row {
      display: flex;
      justify-content: space-between;
      line-height: 2;
      color: #222;
      h3:first-child {
        color: #9e9e9e;
      }
      h3 {
        font-size: 1rem;
        padding-left: 1rem;
        font-weight: 500;
      }
    }

    .giftCard {
      display: flex;
      align-items: center;
      margin-block: 2rem 1rem;
      border-bottom: 1px solid #888;
      span {
        font-size: 2rem;
      }
      input {
        background-color: transparent;
        font-size: 22px;
      }
    }

    .TotalPrice {
      display: flex;
      justify-content: space-evenly;
      text-transform: uppercase;
    }
    button {
      padding: 0.4rem;
      font-size: 20px;
      margin-inline: 1rem;
      margin-top: 0.5rem;
    }
  }
`;
const QUANTITY = styled.td`
  color: #7f7f7f;
  gap: 0.3rem;

  span {
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #eee;
    border-radius: 50%;
  }
  span:hover {
    background-color: #0a0a0a64;
    color: #fff;
  }

  textarea {
    background-color: #eee;
    width: 60px;
    font-size: 20px;
    resize: none;
    text-align: center;
  }
`;

const TOTAL = styled.td`
  font-size: 22px;
`;

function Cart() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const qty = Number(searchParams.get('qty')) || 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (params.id) dispatch(addToCart(params.id, qty));
    navigate('/cart');
  }, [dispatch, params.id, qty, navigate]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  function handleCheckout() {
    navigate('/shipping');
  }

  return (
    <Wrapper>
      <button onClick={() => navigate(-3)}>Go Back</button>
      <table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <Message variant='info'>Your cart is empty</Message>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                removeFromCart={() => removeFromCartHandler(item.product)}
              />
            ))
          )}
        </tbody>
      </table>

      <div>
        <h2>
          total : $
          {cartItems
            .reduce((acc, item) => acc + item.qty * (item.price || 10), 0)
            .toFixed(2)}
        </h2>
        <button onClick={handleCheckout} disabled={cartItems.length === 0}>
          Checkout
        </button>
      </div>
    </Wrapper>
  );
}

// eslint-disable-next-line react/prop-types
function CartItem({ item, removeFromCart }) {
  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
    setQuantity(quantity + 1);
  }

  function handleMinus() {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  }
  useEffect(() => {
    setQuantity(item.qty);
  }, []);
  return (
    <tr>
      <td id='productCell'>
        <span> {item.name}</span>
      </td>
      <TOTAL>${item.price}</TOTAL>
      <QUANTITY>
        <span className='material-symbols-outlined' onClick={handleMinus}>
          remove
        </span>

        <textarea
          name=''
          id=''
          cols='1'
          rows='1'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></textarea>
        <span className='material-symbols-outlined' onClick={() => handleAdd()}>
          add
        </span>
      </QUANTITY>
      <TOTAL>$ {50 * quantity}</TOTAL>
      <td className='delete'>
        <button onClick={() => removeFromCart(item.product)}>
          <span className='material-symbols-outlined'>close</span>
        </button>
      </td>
    </tr>
  );
}
export default Cart;
