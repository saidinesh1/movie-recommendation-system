import Logo from '../assets/trending.png';
import SearchIcon from '../assets/search.png';

export const Tabs = ({
  tabOptions,
  selectedTab,
  onSelect,
  children,
  profile,
  onSearch,
  onSearchClick,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='bg-white/10 p-[10px] flex h-min items-center justify-between rounded-lg dark:border-gray-700 '>
        <img src={Logo} alt='icon' className='h-[60px] w-[200px]' />
        <ul className='flex flex-row h-min sticky top-0  rounded-lg p-[10px] text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
          <li className='inline-flex justify-between items-center justify-center p-4 relative'>
            <input
              type='text'
              className='rounded p-[4px]'
              placeholder='Search for movies'
              onChange={(e) => {
                onSearch(e.currentTarget.value);
              }}
            />
            <img
              src={SearchIcon}
              alt='icon'
              className='h-[25px] w-[25px] absolute left-[160px] cursor-pointer'
              onClick={() => {
                onSearchClick();
                onSelect({ label: 'Search' });
              }}
            />
          </li>
          {tabOptions.map((option) => (
            <li className='me-2 rounded-lg' onClick={() => onSelect(option)}>
              {option.children && option.children}
              <button
                key={option.label}
                aria-current='page'
                className={`inline-flex justify-between items-center justify-center p-4 rounded-t-lg group font-Rubik text-[18px]  ${
                  selectedTab === option
                    ? 'text-black bg-white text-black rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                    : 'text-white  group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
        <button className='inline-flex gap-x-[10px] justify-between items-center justify-center p-4 text-white rounded-lg group text-[18px] '>
          {profile.pic ? (
            <img
              alt='icon'
              src={profile.pic}
              className='h-[45px] w-[45px] rounded-[999px]'
            />
          ) : (
            <div className='h-[45px] w-[45px] bg-white rounded-[999px] text-[#7d3cff] items-center flex justify-center'>
              {'k'}
            </div>
          )}
          {profile.name ? profile.name : 'Profile Name'}
        </button>
      </div>
      <div className='p-[10px]'>{children}</div>
    </div>
  );
};
