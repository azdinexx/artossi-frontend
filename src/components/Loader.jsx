import { CircularProgress } from '@mui/material';
function Loader() {
  return (
    <CircularProgress
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
      }}
    ></CircularProgress>
  );
}

export default Loader;
