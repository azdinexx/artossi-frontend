import { Alert } from '@mui/material';
// eslint-disable-next-line react/prop-types
function Message({ variant = 'error', children }) {
  return <Alert severity={variant}>{children}</Alert>;
}

export default Message;
