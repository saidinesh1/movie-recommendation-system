export const Tabs = ({
  tabOptions,
  selectedTab,
  onSelect,
  children,
  profile,
}) => {
  console.log(profile, 'profile');
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col justify-between rounded-lg bg-[#cccccc] dark:border-gray-700 sticky top-0 h-screen flex'>
        <ul className='flex flex-col  sticky top-0 rounded-lg gap-y-[10px] p-[10px] text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
          {tabOptions.map((option) => (
            <li
              className='me-2 flex flex-start w-max red-gradient rounded-lg'
              onClick={() => onSelect(option)}
            >
              <button
                key={option.label}
                aria-current='page'
                className={`inline-flex justify-between items-center justify-center p-4 rounded-t-lg group text-[24px] w-[200px] h-[80px] ${
                  selectedTab === option
                    ? 'text-black rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                    : 'text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                }`}
              >
                <img alt='icon' src={option.icon} />
                {option.label}
              </button>
            </li>
          ))}
        </ul>
        <button className='bg-[#dd2222] sticky top-0 inline-flex justify-between items-center justify-center p-4 mb-[10px] ml-[10px] text-white rounded-lg group text-[24px] w-[200px] h-[80px]'>
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
