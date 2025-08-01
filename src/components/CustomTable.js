import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import "../styles/table.css";
function CustomTable( { tableHeadlines, content, columnsToShow, onDelete, onEdit, yesEdit }) {

  return(
    <div className = "MainTable">
<Table>
  <TableHead>
    <div className="firstRow">
    <TableRow>
 
 
      {tableHeadlines.map((headline) => 
     <div className="firstCells">
      <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', whiteSpace: 'nowrap' }}> { headline }</TableCell>
      </div>
     )}

    </TableRow>
    
</div>
    
  </TableHead>
  
 <TableBody>
 
        {content.map((item) => (
          <TableRow key={item.id}>
            {columnsToShow.map((col) => (
          <div className = "cell">
        <TableCell>{item[col]}</TableCell>
        </div>
      ))}
       <div className = "buttons">        
      <TableCell>
      <button onClick = {() => onDelete(item.id) } className = "deleteBttn">DELETE</button> 
      {yesEdit && <button onClick = {() => onEdit(item)} className = "editBttn">EDIT</button>}
      </TableCell>
        </div>
       
    </TableRow>
        ))}
      
  </TableBody>
</Table>
</div>
  );
}
export default CustomTable;