import {useTable} from "react-table";
import styled from "styled-components";

export default function RankTable({ columns, data }) {
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
        columns,
        data
    });

    return (
        <TableSheet {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </TableSheet>
    );
}

const TableSheet = styled.table`
  text-align: center;
  border-collapse: collapse;
  line-height: 1.5;
  margin-top: 1rem;
  margin-left: 4rem;
`
const Th = styled.th`
  padding: 20px;
  font-weight: bold;
  vertical-align: top;
  color: #369;
  border-bottom: 3px solid #036;
`
const Td = styled.td`
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
`