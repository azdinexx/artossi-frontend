import { useSelector } from 'react-redux';

function Profile() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <h1>Profile</h1>
      <p>{userInfo.name}</p>
      <p>{userInfo.email}</p>
    </div>
  );
}

export default Profile;
