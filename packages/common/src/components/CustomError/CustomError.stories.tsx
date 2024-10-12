import type { Meta, StoryObj } from '@storybook/react';
import { CustomError } from './CustomError';

const meta = {
  title: 'Components/CustomError',
  component: CustomError,
  parameters: {
    layout: 'centered',
  },
  tags: [],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof CustomError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
    code: 404
  },
};


export const Unexpected: Story = {
  args: {
    code: 0
  },
};
