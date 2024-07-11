'use server';

import { createMistral } from '@ai-sdk/mistral';
import { generateText } from 'ai';
import { env } from '~/env';

interface GeneratePickupLinesProps {
  description: string;
  style: string;
}

export const generatePickupLines = async ({
  description,
  style,
}: GeneratePickupLinesProps) => {
  const prompt = `Generate pickup lines for my crush, here is the description: ${description} and style for pickup lines is: ${style}. Generate them in JSON format, no other things just the json output of form { pickup_lines: string[] }`;

  const mistral = createMistral({ apiKey: env.MISTRAL_API_KEY });

  const { text } = await generateText({
    model: mistral('mistral-large-latest'),
    prompt,
  });

  let pickupLines: string[];
  const parsed = JSON.parse(text) as object;
  if ('pickup_lines' in parsed) {
    pickupLines = (parsed.pickup_lines as string[]).slice(0, 4);
  } else {
    pickupLines = [];
  }

  return pickupLines;
};
