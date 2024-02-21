import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '.';

const meta: Meta<typeof Table> = {
  title: 'Common/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const DataTable = [...Array(10).keys()].map(() => ({
  id: '123',
  project: 'Anna',
  launchDate: '23/12/2022',
  saleStatus: 'Ongoing',
}));

const columns = [
  {
    Header: 'Project',
    accessor: 'project',
  },
  {
    Header: 'Launch date',
    accessor: 'launchDate',
  },
  {
    Header: 'Sale status',
    accessor: 'saleStatus',
  },
];

export const Standard: Story = {
  args: {
    columns,
    data: DataTable,
  },
};
