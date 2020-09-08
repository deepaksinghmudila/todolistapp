import React from 'react';

const ToDoLists = (props) => {       

 return (
  <>
        <div  className="list_item">
             <i
                 className="fa fa-close"
                 area-hidden="true"
                 onClick={() => {
                     props.onSelect(props.id);
                 }} />              
             <li>{props.item}</li>
        </div>
        
   </>
  );
};

export default ToDoLists;