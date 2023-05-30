/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CartItem({ item }) {
  return (
    <Card
      sx={{
        display: 'flex',
        boxShadow: 'none',
        alignItems: 'center',
      }}
    >
      <CardMedia
        component='img'
        sx={{ height: 60, width: 60, borderRadius: '50%' }}
        image={item.image}
        alt={item.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {item.name}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {item.qty} x ${item.price} = ${item.qty * item.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
