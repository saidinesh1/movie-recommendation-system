import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => {
      navigate('/login');
    });
  };
  return (
    <div>
      {currentUser.email}
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  );
};
