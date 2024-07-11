'use client';

import Image from 'next/image';

import React from 'react';

import CopyIcon from 'public/copy-icon.svg';
import { toast } from 'sonner';
import { useCopyToClipboard } from 'usehooks-ts';
import { GenerateButton } from '~/components';

import { Button } from '~/components/ui/button';

interface PromptOutputProps {
  lines: string[];
  setOutput: (value: string[]) => void;
}

export const PromptOutput = ({ lines, setOutput }: PromptOutputProps) => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='text-center font-display text-2xl tracking-wider text-brandSecondary'>
        Copy the below pick up lines
      </div>
      <div className='flex flex-col gap-4'>
        {lines.map((line, index) => (
          <LineBox key={line} index={index} line={line} />
        ))}
      </div>
      <GenerateButton
        className='w-full'
        title='Regenerate pickup line'
        onClick={() => {
          setOutput([]);
        }}
      />
    </div>
  );
};

interface LineBoxProps {
  index: number;
  line: string;
}

const LineBox = ({ index, line }: LineBoxProps) => {
  const [, copy] = useCopyToClipboard();
  return (
    <div className='flex flex-col gap-1 rounded-lg border border-brand p-3 font-display tracking-wider'>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-2xl text-brandSecondary'>
          Pickup line {index + 1}
        </div>
        <Button
          className='m-0 h-10 w-10 p-0'
          variant='link'
          onClick={() => {
            void copy(line);
            toast.success('Copied to clipboard');
          }}
        >
          <Image alt='Copy' src={CopyIcon as unknown as string} />
        </Button>
      </div>
      <div className='max-w-xl whitespace-pre text-pretty text-lg text-[#FF6A8E]'>
        {line}
      </div>
    </div>
  );
};
