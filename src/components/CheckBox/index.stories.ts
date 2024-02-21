import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '.';

const meta: Meta<typeof CheckBox> = {
  title: 'Common/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Checked: Story = {
  args: {
    description: 'yes i will help ( bless you if you did )',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    description: 'yes i will help ( bless you if you did )',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    description: 'yes i will help ( bless you if you did )',
    checked: false,
    isDisabled: true,
  },
};
