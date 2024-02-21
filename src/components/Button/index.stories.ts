import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryLong: Story = {
  args: {
    children: 'Confirm Vote',
    theme: 'primary_long',
  },
};

export const GrayLong: Story = {
  args: {
    children: 'Cancel',
    theme: 'gray_long',
  },
};

export const Primary: Story = {
  args: {
    children: 'Cast Vote',
    theme: 'primary',
  },
};

export const Gray: Story = {
  args: {
    children: 'Cancel',
    theme: 'gray',
  },
};

export const PrimaryLoaded: Story = {
  args: {
    children: 'Cast Vote',
    theme: 'primary',
    isLoading: true,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Confirm Vote',
    theme: 'primary',
    isDisabled: true,
  },
};
