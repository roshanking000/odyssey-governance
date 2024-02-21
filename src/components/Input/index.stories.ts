import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter your power ...',
  },
};

export const WithLabel: Story = {
  args: {
    value: '',
    label: 'Youre voting power:',
    placeholder: 'Enter your power ...',
  },
};

export const Disabled: Story = {
  args: {
    value: '',
    disabled: true,
    label: 'Youre voting power:',
    placeholder: 'Enter your power ...',
  },
};

export const EnteredNotNumber: Story = {
  args: {
    value: '12321sadad',
    isNumberOnly: true,
    label: 'Youre voting power:',
    placeholder: 'Enter number ...',
  },
};

export const EnterNumber: Story = {
  args: {
    value: '12321',
    isNumberOnly: true,
    label: 'Youre voting power:',
    placeholder: 'Enter number ...',
  },
};

export const Password: Story = {
  args: {
    value: '123123',
    isPassword: true,
    label: 'Youre voting power:',
    placeholder: 'Enter your power ...',
  },
};
