import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';
export const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const [modalOpen,setModalOpen]=useState(false)
  const handleLogOut = async () => {
    await logOut().then(() => {
      navigate('/login');
    });
  };
  return (
    <div>
      {currentUser.email}
      {JSON.stringify(currentUser)}
      <img src={currentUser.photoURL} alt='icon' />
      <button onClick={()=>{setModalOpen(true)}}>Sign Out</button>
      <Modal isOpen={modalOpen} className={'h-[200px] w-[200px] '}><button onClick={handleLogOut}>Are you sure want to signout ?</button></Modal>
    </div>
  );
};
