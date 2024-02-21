import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'Common/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryLong: Story = {
  args: {
  },
};
