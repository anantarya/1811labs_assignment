import React, { type ComponentProps } from 'react';

import { cn } from '~/lib/utils';

import { Button } from './ui/button';

import { Heart } from 'lucide-react';

interface GenerateButtonProps extends ComponentProps<'button'> {
  title?: string;
}

export const GenerateButton = ({
  title = 'Generate one for me',
  className,
  ...props
}: GenerateButtonProps) => {
  return (
    <Button
      className={cn(
        'flex h-12 items-center gap-5 rounded-full bg-brand font-display text-2xl tracking-wide text-white sm:h-16 sm:text-[2rem]',
        className
      )}
      {...props}
    >
      <Heart fill='#fff' size={16} />
      {title}
      <Heart fill='#fff' size={16} />
    </Button>
  );
};
