import React, {
  FC,
  ReactNode,
  memo,
  useEffect,
} from 'react';
import cx from 'classnames';
import {
  Column,
  Row,
  TableInstance,
  useExpanded,
  useRowSelect,
  useTable,
  UseExpandedOptions,
  UseTableOptions,
} from 'react-table';

import styles from './styles.module.scss';

interface SelectedRowIdsProps {
  [k: string]: boolean;
}

interface TableProps {
  columns: Column<object>[];
  columnsExpanded?: Column<object>[];
  showHeaders?: boolean,
  data: object[];
  className?: string;
  expandedTableClassName?: string;
  tdOpenClassName?: string;
  tdOpenExpandedClassName?: string;
  getSelectedExpandedRows?: (args0: {
    selectedRowIds: SelectedRowIdsProps,
    selectedFlatRows: object[],
  }) => void;
  getActiveExpandedRows?: (args0: {
    selectedIndexRow: number | null,
  }) => void;
  expandedChildren?: (row?: object) => ReactNode;
  expandedChildrenTop?: (row?: object) => ReactNode;
}

export const Table: FC<TableProps> = memo(({
  columns,
  data,
  className,
  expandedTableClassName,
  columnsExpanded,
  showHeaders = true,
  getSelectedExpandedRows,
  expandedChildren,
  expandedChildrenTop,
  tdOpenClassName,
  tdOpenExpandedClassName,
  getActiveExpandedRows,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds, expanded },
  }: TableInstance<object> & {
    selectedFlatRows?: Array<Row<object>>;
    state: { selectedRowIds?: SelectedRowIdsProps, expanded?: object }
  } = useTable({
    columns,
    data,
    autoResetExpanded: false,
  } as UseTableOptions<object> & UseExpandedOptions<object>, useExpanded, useRowSelect);

  useEffect(() => {
    if (getSelectedExpandedRows && selectedRowIds && selectedFlatRows?.length) {
      getSelectedExpandedRows({
        selectedRowIds,
        selectedFlatRows: selectedFlatRows.map((d: { original: object }) => d.original),
      });
    }
  }, [expanded, getSelectedExpandedRows, rows, selectedFlatRows, selectedRowIds]);

  useEffect(() => {
    if (getActiveExpandedRows && expanded && Object.keys(expanded).length) {
      getActiveExpandedRows({
        selectedIndexRow: +Object.keys(expanded)[0],
      });
    } else if (getActiveExpandedRows) {
      getActiveExpandedRows({
        selectedIndexRow: null,
      });
    }
  }, [expanded, getActiveExpandedRows]);

  return (
    <table
      {...getTableProps()}
      className={cx(styles.table, className)}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              showHeaders &&
              (<th {...column.getHeaderProps()}>{column.render('Header') as ReactNode}</th>)        
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: Row<object> &
        { isExpanded?: boolean }) => {
          const rowData = row.original as {
            data: object[];
            sales: object[];
          };
          prepareRow(row);
          return (
            <React.Fragment key={row.getRowProps().key}>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className={cx(tdOpenClassName, { [styles.td_open]: row.isExpanded })}
                  >
                    {cell.render('Cell') as ReactNode}
                  </td>
                ))}
              </tr>
              {row.isExpanded && columnsExpanded && (rowData?.sales || rowData?.data) && (
                <tr>
                  <td
                    colSpan={row.cells.length}
                    className={cx(styles.td_clear, tdOpenExpandedClassName)}
                  >
                    {expandedChildrenTop && expandedChildrenTop(rowData)}
                    <Table
                      className={expandedTableClassName}
                      columns={columnsExpanded}
                      data={rowData?.sales || rowData.data}
                      getSelectedExpandedRows={getSelectedExpandedRows}
                    />
                    {expandedChildren && expandedChildren(rowData)}
                  </td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
});
