import { Outlet } from 'react-router-dom';
import { SignIn } from '@Utils/Constant';

function AuthProvider() {
  const isSignedIn = true;

  return isSignedIn ? <Outlet /> : <SignIn />;
}

export default AuthProvider;
