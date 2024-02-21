import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { votingFilters } from 'appConstants';
import { FilterType, Filters } from '.';

const meta: Meta<typeof Filters> = {
  title: 'Common/Filters',
  component: Filters,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Filters>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    filters: votingFilters,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();
    const onChange = (filterValue?: FilterType) => updateArgs({ value: filterValue });

    return (
      <Filters
        {...args}
        setActiveFilter={onChange}
        activeFilter={value}
      />
    );
  },
};
