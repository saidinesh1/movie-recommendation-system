import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { AuthProvider } from './contexts/AuthContext';
import { Dashboard } from './pages/dashboard';
import { LogIn } from './pages/log-in';
import Modal from 'react-modal';
import { SignUp } from './pages/sign-up';
import { Snowfall } from 'react-snowfall';
import { useAuth } from './contexts/AuthContext';

const PrivateRoutes = () => {
  let { currentUser } = useAuth();
  return currentUser ? <Dashboard /> : <Navigate to='/login' />;
};
const App = () => {
  Modal.setAppElement('#root');

  const currentUser = useAuth();
  return (
    <div className='App'>
      <Snowfall
        snowflakeCount={100}
        style={{
          background: 'black',
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <div className='relative z-10 w-full'>
        <ToastContainer autoClose={2000} position='bottom-center' />
        <AuthProvider>
          <Router>
            <Routes>
              <Route path='/dashboard' Component={Dashboard} exact />
              <Route path='/login' Component={LogIn} />
              <Route path='/signup' Component={SignUp} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;
