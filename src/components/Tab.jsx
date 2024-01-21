export const Tabs = ({ tabOptions, selectedTab, onSelect }) => {
  return (
    <div className='border-b border-gray-200 dark:border-gray-700'>
      <ul className='flex flex-col -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        {tabOptions.map((option) => (
          <li className='me-2 flex flex-start' onClick={() => onSelect(option)}>
            <button
              key={option.label}
              aria-current='page'
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group ${
                selectedTab === option
                  ? 'text-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                  : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
              }`}
            >
              <svg
                className={`w-4 h-4 me-2 ${
                  selectedTab === option
                    ? 'text-blue-600  rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
                    : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                }`}
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
              </svg>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
