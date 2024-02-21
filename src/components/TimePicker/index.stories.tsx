import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Moment } from 'moment';

import { TimePicker } from './index';

const meta: Meta<typeof TimePicker> = {
  title: 'Common/TimePicker',
  component: TimePicker,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Standard: Story = {
  args: {
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();
    const onChange = (time: Moment) => updateArgs({ value: time });

    return <TimePicker {...args} onChangeValue={onChange} value={value} />;
  },
};
