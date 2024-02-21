import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './index';

const meta: Meta<typeof Footer> = {
  title: 'Common/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const OneItem: Story = {
  args: {
  },
};
