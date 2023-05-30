/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export default function ShippingCard({ shipping }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Shipping Details
          </Typography>
          <Typography variant='h5' component='div'>
            {shipping.fullName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {shipping.address}
          </Typography>
          <Typography variant='body2'>
            {shipping.country},{shipping.city}, {shipping.zipCode}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to='/shipping'>
            <Button size='small'>Change</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

/* 
<h1>
{shippingAddress.fullName} {shippingAddress.address}{' '}
{shippingAddress.city} {shippingAddress.zipCode}{' '}
{shippingAddress.country} {shippingAddress.phone}
</h1> */
