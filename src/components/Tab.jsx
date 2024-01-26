export const Tabs = ({ tabOptions, selectedTab, onSelect, children }) => {
  return (
    <div className='flex flex-row'>
      <div className=' dark:border-gray-700'>
        <ul className='flex flex-col -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
          {tabOptions.map((option) => (
            <li
              className='me-2 flex flex-start w-max'
              onClick={() => onSelect(option)}
            >
              <button
                key={option.label}
                aria-current='page'
                className={`inline-flex items-center justify-center p-4 rounded-t-lg group text-[24px] ${
                  selectedTab === option
                    ? 'text-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                    : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                }`}
              >
                {option.icon ? option.icon : null}
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};
