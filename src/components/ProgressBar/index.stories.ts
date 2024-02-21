import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '.';

const meta: Meta<typeof ProgressBar> = {
  title: 'Common/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AllOptions: Story = {
  args: {
    progress: 10, 
    description: 'yes i will help ( bless you if you did )', 
    value: '569.75 Votes', 
  },
};

export const ProgressUndefined: Story = {
  args: {
    progress: undefined, 
    description: 'yes i will help ( bless you if you did )', 
    value: '569.75 Votes', 
  },
};

export const Progress10: Story = {
  args: {
    progress: 10, 
    description: 'yes i will help ( bless you if you did )', 
    value: '569.75 Votes', 
  },
};

export const Progress100: Story = {
  args: {
    progress: 100, 
    description: 'yes i will help ( bless you if you did )', 
    value: '569.75 Votes', 
  },
};

export const Progress1000: Story = {
  args: {
    progress: 1000, 
    description: 'yes i will help ( bless you if you did )', 
    value: '569.75 Votes', 
  },
};
