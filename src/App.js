import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { Dashboard } from './pages/dashboard';
import { LogIn } from './pages/log-in';
import { SignUp } from './pages/sign-up';

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path='/dashboard' Component={Dashboard} />
            <Route path='/login' Component={LogIn} />
            <Route path='/signup' Component={SignUp} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
