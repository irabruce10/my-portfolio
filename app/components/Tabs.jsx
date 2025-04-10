import { motion } from 'framer-motion';
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
          <motion.button
            key={tab.id}
            className={`text-xs md:text-[15px] ${getActiveStyles(
              tab.value,
            )} rounded-full px-2 md:px-8 py-[6px] md:py-3`}
            onClick={() => onChange(tab.value)}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{
              opacity: activeTab === tab.value ? 1 : 0.8,
              scale: activeTab === tab.value ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
