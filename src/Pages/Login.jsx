import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Message from '../components/Message';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Loader from '../components/Loader';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get('redirect') || '/';
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log('Please fill in all fields');
      dispatch(login(email, password));
    }
  };
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          marginBlock: '10rem',
          paddingBlock: '4rem',
          paddingInline: '3rem',
          borderRadius: '1rem',
          backgroundColor: '#fff',

          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <h1 style={{ margin: '0', paddingBottom: '2rem' }}>
          <i>ARTOSSI</i>
        </h1>
        {error && <Message>{error}</Message>}
        {loading ? <Loader /> : null}
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
          noValidate
          autoComplete='off'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label='Email'
            variant='outlined'
          />
          <TextField
            type='password'
            label='Password'
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type='submit'
            onClick={handleLogin}
            style={{
              margin: '2rem',
              padding: '.52rem',
            }}
            disabled={loading}
          >
            Login
          </Button>
        </Box>
        <Link to='/register' style={{ color: '#222' }}>
          Create Account{' '}
        </Link>
      </div>
    </div>
  );
}

export default Login;
