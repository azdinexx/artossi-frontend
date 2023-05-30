import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Container,
  Grid,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setThePaymentMethod } from '../actions/cartActions';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    dispatch(
      setThePaymentMethod({
        paymentMethod,
      })
    );
    console.log('Chosen payment method:', paymentMethod);
  };

  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl component='fieldset'>
              <RadioGroup
                name='paymentMethod'
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value='creditCard'
                  control={<Radio />}
                  label='Credit Card'
                />
                <FormControlLabel
                  value='paypal'
                  control={<Radio />}
                  label='PayPal'
                />
                <FormControlLabel
                  value='bankTransfer'
                  control={<Radio />}
                  label='Bank Transfer'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PaymentMethod;
