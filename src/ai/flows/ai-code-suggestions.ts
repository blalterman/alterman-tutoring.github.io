'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing AI-powered code suggestions
 * for refactoring and optimizing Next.js code.
 *
 * - aiCodeSuggestions - A function that takes Next.js code as input and returns AI-powered suggestions for refactoring and optimization.
 * - AICodeSuggestionsInput - The input type for the aiCodeSuggestions function.
 * - AICodeSuggestionsOutput - The return type for the aiCodeSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICodeSuggestionsInputSchema = z.object({
  code: z
    .string()
    .describe('The Next.js code snippet to analyze and provide suggestions for.'),
  outputType: z.enum(['code', 'description']).describe("The desired output type, either 'code' for refactored code or 'description' for a textual explanation."),
});
export type AICodeSuggestionsInput = z.infer<typeof AICodeSuggestionsInputSchema>;

const AICodeSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-powered suggestions for refactoring and optimizing the Next.js code.'),
});
export type AICodeSuggestionsOutput = z.infer<typeof AICodeSuggestionsOutputSchema>;

export async function aiCodeSuggestions(input: AICodeSuggestionsInput): Promise<AICodeSuggestionsOutput> {
  return aiCodeSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCodeSuggestionsPrompt',
  input: {schema: AICodeSuggestionsInputSchema},
  output: {schema: AICodeSuggestionsOutputSchema},
  prompt: `You are an AI expert in Next.js code optimization and refactoring.

  You will analyze the provided Next.js code snippet and provide suggestions for improvement.
  These suggestions should focus on performance, maintainability, and best practices.

  Respond in the requested output type.

  Code Snippet:
  {{code}}

  Desired Output Type: {{outputType}}
  `,
});

const aiCodeSuggestionsFlow = ai.defineFlow(
  {
    name: 'aiCodeSuggestionsFlow',
    inputSchema: AICodeSuggestionsInputSchema,
    outputSchema: AICodeSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
