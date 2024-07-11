import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import BackgroundImage from 'public/background.png';
import { GenerateButton } from '~/components';

const Home = () => {
  return (
    <div className='relative'>
      <Image
        alt='Background'
        className='h-screen w-full object-cover'
        src={BackgroundImage}
      />
      {/* Can't do right-1/2 because of image unevenness */}
      <div className='absolute right-[51%] top-1/2 translate-x-1/2'>
        <Link href='/generate'>
          <GenerateButton />
        </Link>
      </div>
      <div className='absolute right-[51%] top-[12%] translate-x-1/2'>
        <div className='text-center font-display text-4xl leading-[1.2] tracking-wider text-white sm:text-6xl'>
          Pickup line <br />
          Generator
        </div>
      </div>
    </div>
  );
};

export default Home;
