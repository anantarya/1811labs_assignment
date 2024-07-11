'use client';

import React, { type ComponentProps } from 'react';

import { signout } from '~/lib/supabase/server/actions';
import { cn } from '~/lib/utils';

import { Button } from '~/components/ui/button';

type SignOutProps = ComponentProps<'button'>;

export const SignOut = ({ className, ...props }: SignOutProps) => {
  return (
    <Button
      className={cn(
        'h-12 rounded-full bg-[#b5002d2d] font-display text-2xl tracking-wide text-[#B5002C] sm:h-16 sm:text-[2rem]',
        className
      )}
      onClick={async () => {
        await signout();
      }}
      {...props}
    >
      Signout
    </Button>
  );
};
