import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

const meta: Meta<typeof Link> = {
  title: 'Common/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: '0x1e0024',
  },
};

export const WithoutArrow: Story = {
  args: {
    children: '0x1e0024',
    needArrow: false,
  },
};
