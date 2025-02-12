import React from 'react';

export const Tabs = ({ tabList, activeTab, onChange }) => {
  const getActiveStyles = (tabValue) => {
    return activeTab === tabValue
      ? 'text-white bg-gradient-primary'
      : 'text-secondary bg-transparent';
  };
  return (
    <div className="flex items-center justify-center my-10">
      <div className=" bg-[#fff6eb] rounded-full flex">
        {tabList.map((tab) => (
          <button
            key={tab.id}
            className={`text-xs md:text-[15px] ${getActiveStyles(
              tab.value,
            )} rounded-full px4 md:px-10 py-[16px] md:py-3`}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
