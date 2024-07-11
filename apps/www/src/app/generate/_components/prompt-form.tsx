'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { generatePickupLines } from '~/lib/mistral';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GenerateButton } from '~/components';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

import { PromptOutput } from './prompt-output';

const placeholderText = `She is a 10 but..
He likes football....`;

export const PromptForm = () => {
  'use no memo';

  const [output, setOutput] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormType) => {
    try {
      setIsGenerating(true);
      const lines = await generatePickupLines(values);
      setOutput(lines);
    } catch (error) {
      console.log(error);
    } finally {
      setIsGenerating(false);
    }
  };
  return (
    <div className='flex w-full flex-col gap-6'>
      <div className='text-center font-display text-3xl text-brand sm:text-5xl'>
        Pickup line Generator
      </div>
      {output.length === 0 ? (
        <Form {...form}>
          <form
            className='space-y-8 tracking-wider'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-display text-2xl text-brandSecondary'>
                    Tell us about your crush
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className='resize-none font-display text-lg text-brand placeholder:text-lg placeholder:text-neutral-300'
                      placeholder={placeholderText}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='font-display text-lg text-brandSecondary' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='style'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-display text-2xl text-brandSecondary'>
                    Style
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='resize-none font-display text-lg text-brand placeholder:text-lg placeholder:text-neutral-300'
                      placeholder='Funny'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='font-display text-lg text-brandSecondary' />
                </FormItem>
              )}
            />
            <GenerateButton
              className='w-full'
              disabled={isGenerating}
              title={isGenerating ? 'Generating...' : undefined}
              type='submit'
            />
          </form>
        </Form>
      ) : (
        <PromptOutput lines={output} setOutput={setOutput} />
      )}
    </div>
  );
};

const formSchema = z.object({
  description: z
    .string({
      required_error: 'Description must be provided',
    })
    .min(1, {
      message: 'Description must be at least 1 character long',
    }),
  style: z
    .string({
      required_error: 'Style must be provided',
    })
    .min(1, {
      message: 'Style must be at least 1 character long',
    }),
});

type FormType = z.infer<typeof formSchema>;
