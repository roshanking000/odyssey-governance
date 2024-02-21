import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from 'components/ProgressBar';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Common/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Obscure: Story = {
  args: {
    title: 'Details',
    children: 
  <>
    <ProgressBar description="yes i will help ( bless you if you did )" value="65,147.01 Votes" progress={99.13} />
    <ProgressBar description="don´t feel bad if you cant the curren tim..." value="569.75 Votes" progress={0.87} />
  </>,
    theme: 'obscure',
  },
};

export const Imperceptible: Story = {
  args: {
    title: 'Details',
    children: 
  <>
    <ProgressBar description="yes i will help ( bless you if you did )" value="65,147.01 Votes" progress={99.13} />
    <ProgressBar description="don´t feel bad if you cant the curren tim..." value="569.75 Votes" progress={0.87} />
  </>,
    theme: 'imperceptible',
  },
};
