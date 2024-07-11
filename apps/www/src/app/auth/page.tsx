import Image from 'next/image';

import React from 'react';

import { login } from '~/lib/supabase/server/actions';

import GoogleIcon from 'public/google.svg';

import { Button } from '~/components/ui/button';

import { Heart } from 'lucide-react';

const Login = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex w-full max-w-lg flex-col items-center justify-center gap-8 px-2'>
        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-brand p-2'>
          <Heart className='text-white' fill='#fff' size={16} />
        </div>
        <div className='flex flex-col items-center gap-4 text-center'>
          <div className='text-[1.25rem] font-semibold'>
            Pickup line generator
          </div>
          <div className='text-base font-medium text-neutral-400'>
            Generate pickup line for your crush now!
          </div>
        </div>
        <form>
          <Button
            className='flex h-12 w-full flex-row items-center gap-3 rounded-full text-base font-semibold'
            formAction={login}
            variant='secondary'
          >
            <Image
              alt='Google'
              height={24}
              src={GoogleIcon as unknown as string}
              width={24}
            />
            Sign up with google
          </Button>
        </form>
        <div className='pt-72 text-[14px] font-medium text-neutral-400 text-center'>
          By signing up, you agree to the,{' '}
          <span className='cursor-pointer underline'>Terms of Use</span>,
          <span className='cursor-pointer underline'>Privacy Notice</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
