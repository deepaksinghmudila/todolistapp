import React, { useState } from 'react';
import './index.css';
import ToDoLists from './ToDoLists';
import AddIcon from '@material-ui/icons/Add'; 
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {
   
    const [item, setItem] = useState();
    const [listItem, setAddItem] =useState([]); 

    const inputItem = (event) => {                    
        setItem(event.target.value);
    };
    
    const listOfItems = () => {
        setAddItem((oldItems) => {
            return [...oldItems, item];   
        });
        setItem("");
    };
    const deleteItems = (id) => {
        console.log("deleted");  

        setAddItem( (oldItems) => {
            return oldItems.filter( (arrElem, index) => {
                return index !== id;
            });
        });
    };

    return (
        <>  
         <div className="outer_div">
             <div className="main_div" style={{backgroundColor:"white"}} >                    
                         <div className="row1">
                             <h2>To Do List </h2>
                         </div>                        
                    <div className="card" >                      
                         <div className="row2"> 
                            <input
                             placeholder="Add the task"
                              onChange={inputItem}   
                              value={item}
                              maxLength={30}
                              />
                         </div>                                    
                         <div className="row3">
                            <Tooltip title="Add">
                                <Button onClick={listOfItems}>
                                 <AddIcon />
                                </Button>
                            </Tooltip>                                                 
                         </div>                                                     
                    </div>    
                <div className="row4">    
                    <ul>
                    {
                        listItem.map( (itemval,index) => {
                            return <ToDoLists
                                key={index}
                                id={index}
                                item={itemval} 
                                onSelect={deleteItems} />;
                        })       
                    } 
                    </ul>                    
                </div>                                             
               </div>
         </div>     
        </>
    );
};

export default App;
