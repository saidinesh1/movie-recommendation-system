import { Card } from '../components/Card';
import { Json } from '../constants/result.constant';
import Modal from 'react-modal';
import { Tabs } from '../components/Tab';
import { VideoPlayer } from '../components/MoviePlayer';
import backgroundImage from '../assets/dashboard-bg.jpg';
import bgImage from '../assets/dashboard-bg.jpg';
import { latestMovieFetch } from '../api/latestMovies';
import { posterFetch } from '../api/poster';
import { tabOptions } from '../constants/dashboard.constant';
import { trailerFetch } from '../api/trailer';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ytTrailerFetch } from '../api/ytScrappedVideo';

Modal.setAppElement('#root');
export const Dashboard = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const { currentUser, logOut } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabOptions[2]);
  const [posters, setPosters] = useState();
  const [trending, setTrending] = useState();
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const [currentTrailerId, setCurrentTrailerId] = useState('');
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
  }, [selectedTab, currentTrailerId]);

  const openVideoPlayer = async (id, title) => {
    setIsVideoPlay(true);
    try {
      const response = await ytTrailerFetch(title);

      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }

      const data = await response.json();

      if (data) {
        setCurrentTrailerId(
          data.twoColumnSearchResultsRenderer.primaryContents
            .sectionListRenderer.contents[0].itemSectionRenderer.contents[1]
            .videoRenderer.videoId
        );
      } else {
        console.log('No data');
      }
    } catch (error) {
      console.error('Error fetching movie poster:', error.message);
    }
  };

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
        onSearch={setInput}
        onSearchClick={handlePosterFetch}
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
              <div className='grid grid-cols-3 gap-[30px] w-fit'>
                {posters &&
                  posters.length > 0 &&
                  posters.map(
                    (poster) =>
                      poster.poster_path && (
                        <Card
                          id={poster.id}
                          imageUrl={`https://image.tmdb.org/t/p/w500${poster.poster_path}`}
                          movieName={poster.title}
                          movieYear={poster.release_date.substring(0, 4)}
                          overview={poster.overview}
                          onPlay={openVideoPlayer}
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
                          id={trendingMovie.id}
                          imageUrl={`https://image.tmdb.org/t/p/w500${trendingMovie.poster_path}`}
                          movieName={trendingMovie.title}
                          movieYear={trendingMovie.release_date.substring(0, 4)}
                          overview={trendingMovie.overview}
                          onPlay={openVideoPlayer}
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
      <VideoPlayer
        isVideoPlayerOpen={isVideoPlay}
        setIsVideoPlayerOpen={() => {
          setIsVideoPlay();
          setCurrentTrailerId(null);
        }}
        url={`https://www.youtube.com/embed/${currentTrailerId}`}
      />
      <button
        onClick={() => {
          console.log('here at signout');
          setModalOpen(true);
        }}
        className='bg-white'
      >
        Sign Out
      </button>
      <Modal
        isOpen={modalOpen}
        className={'h-[300px] w-[300px] bg-white flex'}
        contentLabel='Sign Out Modal'
      >
        <button onClick={handleLogOut} className='bg-white'>
          Are you sure want to signout ?
        </button>
      </Modal>
    </div>
  );
};
