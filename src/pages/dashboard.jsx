import { Card } from '../components/Card';
import Modal from 'react-modal';
import { Tabs } from '../components/Tab';
import backgroundImage from '../assets/dashboard-bg.jpg';
import bgImage from '../assets/dashboard-bg.jpg';
import { latestMovieFetch } from '../api/latestMovies';
import { posterFetch } from '../api/poster';
import { tabOptions } from '../constants/dashboard.constant';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const { currentUser, logOut } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabOptions[2]);
  const [posters, setPosters] = useState();
  const [trending, setTrending] = useState();

  const handleLatestMovieFetch = async () => {
    try {
      const response = await latestMovieFetch();

      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setTrending(data.results);
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error('Error fetching movie poster:', error.message);
    }
  };

  useEffect(() => {
    if (selectedTab.label === 'Top trending') {
      handleLatestMovieFetch();
    }
  });
  const handlePosterFetch = async () => {
    try {
      const response = await posterFetch(input);

      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setPosters(data.results);
        const posterPath = data.results[0].poster_path;
        const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

        console.log('Movie Poster URL:', posterUrl);
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error('Error fetching movie poster:', error.message);
    }
  };

  const handleLogOut = async () => {
    await logOut().then(() => {
      navigate('/login');
    });
  };
  const onSelect = (option) => {
    setSelectedTab(option);
  };

  return (
    <div className='p-[10px]'>
      <Tabs
        tabOptions={tabOptions}
        selectedTab={selectedTab}
        onSelect={onSelect}
        profile={{
          pic:
            currentUser && currentUser.photoURL ? currentUser.photoURL : null,
          name:
            currentUser && currentUser.displayName
              ? currentUser.displayName
              : 'K',
        }}
        children={
          selectedTab.label === 'Search' ? (
            <div className='flex flex-col gap-[20px]'>
              <input
                className='border border-2 w-[300px]'
                type='text'
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                onClick={handlePosterFetch}
                className='text-white'
                type='submit'
              >
                Search
              </button>
              <div className='grid grid-cols-3 gap-y-[20px] gap-x-[20px] w-[90%]'>
                {posters &&
                  posters.length > 0 &&
                  posters.map(
                    (poster) =>
                      poster.poster_path && (
                        <Card
                          imageUrl={`https://image.tmdb.org/t/p/w500${poster.poster_path}`}
                          movieName={poster.title}
                          movieYear={poster.release_date.substring(0, 4)}
                          overview={poster.overview}
                        />
                      )
                  )}
              </div>
            </div>
          ) : selectedTab.label === 'Top trending' ? (
            <>
              <div className='grid grid-cols-3 gap-[30px] w-fit'>
                {trending &&
                  trending.length > 0 &&
                  trending.map(
                    (trendingMovie) =>
                      trendingMovie.poster_path && (
                        <Card
                          imageUrl={`https://image.tmdb.org/t/p/w500${trendingMovie.poster_path}`}
                          movieName={trendingMovie.title}
                          movieYear={trendingMovie.release_date.substring(0, 4)}
                          overview={trendingMovie.overview}
                        />
                      )
                  )}
              </div>
            </>
          ) : (
            <div></div>
          )
        }
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
