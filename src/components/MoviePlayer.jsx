import Modal from 'react-modal';
import { useEffect } from 'react';

export const VideoPlayer = ({
  isVideoPlayerOpen,
  setIsVideoPlayerOpen,
  url,
}) => {
  return (
    <Modal className={'h-full w-full'} isOpen={isVideoPlayerOpen}>
      <div className='w-full h-full bg-white p-[90px]'>
        <iframe title='Trailer' className='h-full w-full' src={url}></iframe>
        <button onClick={() => setIsVideoPlayerOpen(false)}>Close</button>
      </div>
    </Modal>
  );
};
