function LoginStatus({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? <h3>Welcome Admin</h3> : <h3>Please Login</h3>}
    </>
  );
}

export default LoginStatus;