import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Modal } from './index';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const OneItem: Story = {
  args: {
    title: 'Confirm Vote', 
    isOpen: true,
    children: 
  <>
    <Input label="Youre voting power" placeholder="Enter your power ..." value="" />
    <div>
      <Button theme="primary_long" onClick={() => {}}> Confirm Vote </Button>
      <Button theme="gray_long" onClick={() => {}}> Cancel </Button>
    </div>
  </>,
  },
};
