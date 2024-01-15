import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { SignIn } from './pages/sign-in';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <SignIn />
      </div>
    </AuthProvider>
  );
}

export default App;
