import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function CustomTable( { tableHeadlines, content, columnsToShow, onDelete }) {

  return(
    <div className = "MainTable">
<Table>
  <TableHead>
    <div className="FirstRow">
    <TableRow>

      {tableHeadlines.map((headline) => 
      <TableCell> { headline }</TableCell>
     )}

    </TableRow>
     </div>
  </TableHead>
 <TableBody>
        {content.map((item) => (
          <TableRow key={item.id}>
            {columnsToShow.map((col) => (
        <TableCell>{item[col]}</TableCell>
      ))}
      <button onClick = {() => onDelete(item.id) }>Delete</button> 
        {/* <TableCell>
        <button onClick = {() => onEdit() }>
          Edit
        </button>
      
    <button onClick = {() => onDelete() }>Delete</button> 
     </TableCell>*/}
       
    </TableRow>
        ))}
  </TableBody>
</Table>
</div>
  );
}
export default CustomTable;