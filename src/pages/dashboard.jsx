import Modal from 'react-modal';
import { Tabs } from '../components/Tab';
import { tabOptions } from '../constants/dashboard.constant';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabOptions[2]);
  const handleLogOut = async () => {
    await logOut().then(() => {
      navigate('/login');
    });
  };
  const onSelect = (option) => {
    console.log(option);
    setSelectedTab(option);
  };
  return (
    <div>
      <Tabs
        tabOptions={tabOptions}
        selectedTab={selectedTab}
        onSelect={onSelect}
      />
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Sign Out
      </button>
      <Modal isOpen={modalOpen} className={'h-[200px] w-[200px] '}>
        <button onClick={handleLogOut}>Are you sure want to signout ?</button>
      </Modal>
    </div>
  );
};
