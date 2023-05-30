import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listproducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import CategorieBar from '../components/CategorieBar';
import Pagination from '@mui/material/Pagination';

import MultiActionAreaCard from '../components/Card';

function Products() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listproducts());
  }, [dispatch]);
  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '5rem',
      }}
    >
      <CategorieBar />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
          paddingInline: '3rem',
          margin: '3rem',
        }}
      >
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          products.map((product) => {
            return <MultiActionAreaCard key={product._id} product={product} />;
          })
        )}
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          paddingBlock: '2rem',
        }}
      >
        <Pagination
          count={10}
          variant='outlined'
          color='primary'
          style={{
            marginInline: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default Products;
