import {
  TextField,
  Button,
  Container,
  Grid,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import e from 'express';
import { set } from 'mongoose';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setShippingAddress } from '../actions/cartActions';

const Shipping = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  function handleState(setState) {
    setState(e.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  function handleSaveAdress() {
    dispatch(
      setShippingAddress({
        fullName: fullName,
        address: address,
        city: city,
        zipCode: zipCode,
        country: country,
        phone: phone,
      })
    );
  }

  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id='fullName'
              label='Full Name'
              fullWidth
              value={fullName}
              onChange={setFullName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='address'
              label='Address'
              fullWidth
              value={address}
              onChange={setAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='city'
              label='City'
              fullWidth
              value={city}
              onChange={setCity}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='zipCode'
              label='Zip Code'
              fullWidth
              value={zipCode}
              onChange={setZipCode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='country'
              label='Country'
              fullWidth
              value={country}
              onChange={setCountry}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='phone'
              label='Phone Number'
              fullWidth
              value={phone}
              onChange={setPhone}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type='submit'
              variant='outline'
              color='primary'
              onClick={() => handleSaveAdress}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='
          save this address for next time
          '
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Shipping;
