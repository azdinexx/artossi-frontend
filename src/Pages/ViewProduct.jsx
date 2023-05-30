import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

function ViewProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const details = useSelector((state) => state.productDetails);
  const { loading, product, error } = details;

  useEffect(() => {
    dispatch(productDetails(params.id));
  }, [dispatch, params.id]);

  const handleaddToCart = () => {
    navigate(`/cart/${product._id}?qty=${qty}`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          height: '10rem',
          width: '100%',
        }}
      >
        {loading ? <Loader /> : error ? <Message>{error}</Message> : null}
        {product ? (
          <>
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>

            <div>
              <select
                name=''
                id=''
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              >
                {[...Array(product.stock).keys()].map((x, i) => {
                  return (
                    <option key={i} value={x + 1}>
                      {x + 1}
                    </option>
                  );
                })}
              </select>
            </div>
            <button onClick={handleaddToCart}>add to cart</button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ViewProduct;
