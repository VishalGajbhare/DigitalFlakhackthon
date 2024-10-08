import React from 'react';
import { useTable } from 'react-table';

const DataTable = () => {
  const data = React.useMemo(
    () => [
      { col1: 'Hello', col2: 'World' },
      { col1: 'react-table', col2: 'rocks' },
      { col1: 'whatever', col2: 'you want' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Column 1', accessor: 'col1' },
      { Header: 'Column 2', accessor: 'col2' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
