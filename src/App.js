import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './contexts/AuthContext';
import { Dashboard } from './pages/dashboard';
import { LogIn } from './pages/log-in';
import { SignUp } from './pages/sign-up';


function App() {
  
  return (
    <div className='App'>
      <ToastContainer autoClose={2000} position='bottom-center'/>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/dashboard' Component={Dashboard} />
            <Route path='/login' Component={LogIn} />
            <Route path='/signup' Component={SignUp} />
          </Routes>
        </Router>
        
      </AuthProvider>
    </div>
  );
}

export default App;
