import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoLists = (props) => {       

 return (
  <>
        <div  className="list_item">
             <DeleteIcon                 
                 onClick={() => {
                     props.onSelect(props.id);
                 }} />              
             <li>{props.item}</li>
        </div>
        
   </>
  );
};

export default ToDoLists;