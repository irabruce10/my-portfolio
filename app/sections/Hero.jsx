'use client';
import React from 'react';
import profileImage from '/public/images/profile.png';
import Image from 'next/image';
import ICON_1 from '/public/icons/expo.png';
import ICON_2 from '/public/icons/javascript.png';
import ICON_3 from '/public/icons/nextjs.png';
import ICON_4 from '/public/icons/React.png';
import ICON_5 from '/public/icons/postgresql.png';
import { STATS } from '@/utils/data';
import { StatInfoCard } from '../components/StatInfoCard';
import Link from 'next/link';

export const Hero = () => {
  const downloadHandler = () => {
    const link = document.createElement('a');
    link.href = '/CV/Bruce.pdf';
    link.download = 'Bruce-resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-[80px] gap-14">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          {/* <h3 className="text-xl lg:text-2xl font-medium text-black ">
            👋 Hi, I'm Bruce IRAKOZE
          </h3> */}
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent ">
            Building scalable & User Centric Web Apps.
          </h1>
          <p className="w-full lg:w-[500px] lg:text-base mt-4">
            I'm a passionate Fullstack Developer crafting responsive,
            accessible, and user-friendly web applications and applications. I
            specialize in ReactJS, React Native/Expo, NextJS, TypeScript, and
            Node.js. With a strong foundation in front-end and back-end
            technologies, I build seamless digital experiences that prioritize
            performance and scalability.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <Link href="https://github.com/irabruce10" passHref target="_blank">
              <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
                View My Work
              </button>
            </Link>

            <button
              onClick={downloadHandler}
              className="flex-1 md:flex-none action-btn btn-scale-anim"
            >
              Download My Resume
            </button>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
          <Image
            src={profileImage}
            alt="Profile Pc"
            className="profile-pc  rounded-3xl"
          />

          <Image
            src={ICON_1}
            alt="Expo"
            className="Icon-img -left-10 bottom-20 rotate-[1.75deg]  "
          />
          <Image
            src={ICON_2}
            alt="Js"
            className="Icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg] "
          />
          <Image
            src={ICON_3}
            alt="Nextjs"
            className="Icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg] "
          />
          <Image
            src={ICON_4}
            alt="React"
            className="Icon-img left-[200px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg] "
          />
          <Image
            src={ICON_5}
            alt="Postgresql"
            className="Icon-img -left-8 bottom-40 rotate-[1.75deg] "
          />
        </div>
      </div>

      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => {
          return (
            <StatInfoCard key={item.id} count={item.count} label={item.label} />
          );
        })}
      </div>
    </section>
  );
};
