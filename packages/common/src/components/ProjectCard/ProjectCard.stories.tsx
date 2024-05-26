import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ProjectCard } from './ProjectCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
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
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    children: <div style={{ color: '#eee' }}>Hello World</div>,
    name: 'muchconf',
    id: '01',
    description: 'Wow! So much configuration, so many sources!',
    repository: 'https://github.com',
    website: 'https://kspr.dev',

  },
};
