import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const ToDoLists = (props) => {       

 return (
  <>
         <div className="list_item">
         <Tooltip title="Delete">
                 <Button>
                   <DeleteIcon                 
                          onClick={() => {
                          props.onSelect(props.id);
                           }} />            
                 </Button>
         </Tooltip>            
         <li>{props.item}</li>
        </div>
        
   </>
  );
};

export default ToDoLists;