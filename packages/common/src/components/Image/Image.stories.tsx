import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    src: 'https://cdn-images-1.medium.com/max/2400/1*0Y8z9n07OCfkF8Oe2v_1gQ.jpeg'
  },
};

export const Grayscale: Story = {
  args: {
    src: 'https://cdn-images-1.medium.com/max/2400/1*0Y8z9n07OCfkF8Oe2v_1gQ.jpeg',
    filter: 'grayscale'
  },
};

export const Square: Story = {
  args: {
    src: 'https://cdn-images-1.medium.com/max/2400/1*0Y8z9n07OCfkF8Oe2v_1gQ.jpeg',
    filter: 'grayscale',
    square: true
  },
};

