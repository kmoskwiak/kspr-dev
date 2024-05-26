import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArticleCard } from './ArticleCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    title: 'A Memory-Friendly Way of Reading Files in Node.js',
    description: 'The need to read a file may arise in a variety of cases. It may be a one-time job of parsing error logs, a functionality of an application, a scheduled data migration task, part of a deployment pipeline, etc. ',
    date: new Date(),
    website: 'Medium',
    imageSrc: 'https://cdn-images-1.medium.com/max/2400/1*0Y8z9n07OCfkF8Oe2v_1gQ.jpeg'
  },
};
