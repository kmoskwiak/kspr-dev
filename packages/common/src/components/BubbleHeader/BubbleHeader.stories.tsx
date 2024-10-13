import type { Meta, StoryObj } from '@storybook/react';
import { BubbleHeader } from './BubbleHeader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/BubbleHeader',
  component: BubbleHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof BubbleHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    header: 'Research topics',
    description: 'A list of topics that are currently being researched',
    font: 'sans-serif',
  },
};

export const MonoOutline: Story = {
  args: {
    header: 'Research topics',
    description: 'A list of topics that are currently being researched',
    outline: true,
    font: 'mono',
  },
};
