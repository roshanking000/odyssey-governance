import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '.';

const tabs = [
  {
    key: 'Core',
    label: 'Core', 
  },
  {
    key: 'Community',
    label: 'Community',
    component: 'Community',
  },
  {
    key: 'All',
    label: 'All',
    component: 'All',
  },
];

const tabsStatus = [
  {
    key: 'Vote now',
    label: 'Vote now', 
  },
  {
    key: 'Soon',
    label: 'Soon',
  },
  {
    key: 'Closed',
    label: 'Closed',
  },
];

const meta: Meta<typeof Tabs> = {
  title: 'Common/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Line: Story = {
  args: {
    tabs,
    theme: 'line',
    defaultKey: 'All',
  },
};

export const Frame: Story = {
  args: {
    tabs: tabsStatus,
    theme: 'frame',
    defaultKey: 'All',
  },
};
