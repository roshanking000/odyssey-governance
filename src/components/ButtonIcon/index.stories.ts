import type { Meta, StoryObj } from '@storybook/react';
import { ArrowIcon, ClockIcon, StopIcon } from 'assets';
import { ButtonIcon } from '.';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Common/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    image: ArrowIcon,
  },
};

export const Loaded: Story = {
  args: {
    image: ArrowIcon,
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    image: ArrowIcon,
    isDisabled: true,
  },
};

export const Clock: Story = {
  args: {
    image: ClockIcon,
  },
};

export const Stop: Story = {
  args: {
    image: StopIcon,
  },
};
