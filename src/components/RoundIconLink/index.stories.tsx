import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from 'assets';
import { RoundIconLink } from './index';

const meta: Meta<typeof RoundIconLink> = {
  title: 'Common/RoundIconLink',
  component: RoundIconLink,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof RoundIconLink>;

export const Standard: Story = {
  args: {
    href: 'https://api.testnet.odysseyscan.com/auth/auth0',
    label: 'Sign in',
    iconSrc: Avatar,
  },
};
