import Image from 'next/image';

import React from 'react';

import BackgroundImage from 'public/background.png';

import { PromptForm, SignOut } from './_components';

export const revalidate = 1;

const Generate = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 h-screen w-full bg-white/90' />
      <Image
        alt='Background'
        className='h-screen w-full object-cover'
        src={BackgroundImage}
      />
      <div className='absolute top-0 h-full w-full border'>
        <div className='flex justify-end p-4'>
          <SignOut />
        </div>
        <div className='mx-auto w-full max-w-2xl px-3'>
          <PromptForm />
        </div>
      </div>
    </div>
  );
};

export default Generate;
