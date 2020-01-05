import React from "react";

const ToDo = ({text,onClick= f=>f,completed =true}) =>{
    return (<li className="todo" onClick ={onClick} 
        style={{textDecoration : completed ?  'line-through' : 'none'}}
    >

        {text}
    </li>);
};

export default ToDo;