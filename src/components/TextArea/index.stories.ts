import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './index';

const meta: Meta<typeof TextArea> = {
  title: 'Common/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter youre text ...',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Enter youre text ...',
  },
};

export const WithAutoSize: Story = {
  args: {
    autoSize: true,
    placeholder: 'Enter youre text ...',
  },
};

export const MaxLength5: Story = {
  args: {
    maxLength: 5,
  },
};
