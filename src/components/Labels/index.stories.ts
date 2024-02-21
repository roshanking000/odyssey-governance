import type { Meta, StoryObj } from '@storybook/react';
import { Labels } from '.';

const meta: Meta<typeof Labels> = {
  title: 'Common/Labels',
  component: Labels,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Labels>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Core',
    theme: 'default',
  },
};

export const Red: Story = {
  args: {
    children: 'Closed',
    theme: 'red',
  },
};

export const Green: Story = {
  args: {
    children: 'Vote Vote',
    theme: 'green',
  },
};

export const Orange: Story = {
  args: {
    children: 'Soon',
    theme: 'orange',
  },
};
