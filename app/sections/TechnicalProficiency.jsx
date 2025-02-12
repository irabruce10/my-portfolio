'use client';

import { SKILL_TABS, SKILLS } from '@/utils/data';
import React, { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { SkillCard } from '../components/SkillCard';
import { motion } from 'framer-motion';

export const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState('all');

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  //   setTabData(SKILLS[tab]);
  // };

  const handleTabClick = (value) => {
    if (value == 'all') {
      setTabData(SKILLS);
      setActiveTab('all');
      return;
    }

    const filteredSkills = SKILLS.filter((skill) => skill.type === value);
    setTabData(filteredSkills);
    setActiveTab(value);
  };
  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vh] mx-auto">
          <h4 className="section-title">My Technical Proficiency</h4>
          <p className="text-sm text-center mt-4 leading-4">
            I am an experienced Frontend Developer with a strong foundation in
            JavaScript, ReactJS, NextJS, and TypeScript. I specialize in
            building responsive, accessible, and user-friendly web applications.
            I have experience working with various libraries and frameworks,
            including Redux, MobX, and Tailwind CSS. I am also proficient in
            debugging, testing, and maintaining existing applications. I am also
            an excellent at collaborating with backend developers to build
            scalable and efficient APIs. I am always looking for opportunities
            to learn and grow my skills.
          </p>
        </div>

        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabClick}
        />

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
          {tabData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard
                icon={<skill.icon className="w-6 h-6 text-primary" />}
                skillName={skill.label}
                description={skill.description}
                progress={skill.progress}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
