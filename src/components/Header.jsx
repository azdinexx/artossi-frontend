import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import { styled as styledo } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logout } from '../actions/userActions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const StyledBadge = styledo(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Wrapper = styled.div`
  min-width: 100vw;
  display: flex;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  .user-icons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  header {
    height: 2.8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
      margin: 0;
    }

    .search-bar {
      border: 1px solid #888;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      border-radius: 1rem;
      input {
        width: 500px;
        border: none;
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        background-color: transparent;

        &:focus {
          outline: none;
        }
      }
      span {
        cursor: pointer;
        color: #888;
        &:hover {
          color: #222;
        }
      }
    }
  }
`;
// eslint-disable-next-line react/prop-types
function Header({ scrolled }) {
  const userLogin = useSelector((state) => state.userLogin);
  const cart = useSelector((state) => state.cart);

  const { userInfo } = userLogin;
  const { cartItems } = cart;

  return (
    <Wrapper className={scrolled ? 'scrolling' : 'notScrolling'}>
      <header>
        <div className='logo'>
          <h1>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              <span className='art'>Artossi</span>
            </Link>
          </h1>
        </div>
        <div className='search-bar' id='search-bar'>
          <input type='text' placeholder='search' name='search' />
          <span className='material-symbols-outlined'>search</span>
        </div>
        <div className='user-icons '>
          <Link to='/cart'>
            <IconButton aria-label='cart'>
              <StyledBadge badgeContent={cartItems.length} color='primary'>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
          {userInfo ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccountCircleIcon />
              <UserMenu name={userInfo.name}></UserMenu>
            </div>
          ) : (
            <Link to='/login'>
              <Button> Log in</Button>
            </Link>
          )}
        </div>
      </header>
    </Wrapper>
  );
}

// eslint-disable-next-line react/prop-types
const UserMenu = ({ name }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
    console.log('logout');
    Navigate('login');
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {name}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/profile'>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
export default Header;
