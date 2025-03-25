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
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">My Technical Proficiency</h4>
          <p className="text-sm text-center mt-4 leading-6">
            I am an experienced Fullstack Developer with a strong foundation in
            JavaScript, ReactJS, NextJS, TypeScript, and Node.js. I specialize
            in building responsive, accessible, and user-friendly web
            applications. My expertise extends to working with various libraries
            and frameworks, including Redux, and Tailwind CSS. I am proficient
            in debugging, testing, and maintaining existing applications,
            ensuring seamless performance and scalability. Additionally, I excel
            at collaborating with backend developers to build efficient and
            scalable APIs, utilizing database technologies like PostgreSQL and
            MongoDB. My passion for continuous learning drives me to stay
            updated with the latest industry trends and best practices. I am
            always looking for new challenges and opportunities to enhance my
            skills and contribute to impactful projects.
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
