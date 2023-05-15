"use client";
import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RadioTabs from '@/components/RadioTabs';
import Review from '@/components/Review';
import DownloadNow from '@/components/DownloadNow';
import Footer from '@/components/Footer';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { SwiperNavButtons } from '@/components/SwiperNavButton';
// Import Swiper styles
import 'swiper/css';


export default function Home() {

  return (
    <>
      <div className=''>
        <div className="container mx-auto" />
        <div className="flex py-5 items-center">
          <div className="w-2/12 text-lg font-semibold mx-auto ">
            <img src='/logo.png' className='w-full'></img>
          </div>

          <div className="w-6/12">
            <Nav />
          </div>
          <div className="w-3/12">
            <Button>Download Apps</Button>
          </div>

        </div>
      </div>
      <Hero />
      <About />
      <RadioTabs />
      <Review />

      <DownloadNow />

      <Footer />




    </>
  )
}
