import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Common/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    page: 0,
    pageCount: 4,
    isHideMoveTo: true,
  },
};

export const pageCount10: Story = {
  args: {
    page: 0,
    pageCount: 10,
    isHideMoveTo: true,
  },
};

export const WithMoveTo: Story = {
  args: {
    page: 10,
    pageCount: 4,
    isHideMoveTo: true,
  },
};

export const pageCount100: Story = {
  args: {
    page: 10,
    pageCount: 100,
    isHideMoveTo: true,
  },
};
