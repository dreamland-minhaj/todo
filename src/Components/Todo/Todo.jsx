import { useState } from "react";

const Todo = ()=>{

    const [todo, setTodo] = useState([]);
    
    const [text, setText] = useState("");

    const handleInputText = (e) => {
        setText(e.target.value);
    };

    const handleInputBtn = () => {
        setTodo([...todo, text]);
    };

    const handleExitBtn = (item) => {
       setTodo(todo.filter((data)=> data != item));
    };

    return(
        <>
        <div className="h-screen bg-slate-200 pl-10 pt-10">
            <h1 className="font-sans font-extrabold mb-3">Create ToDo List</h1>
            <div className="max-w-94">
                <div className="input-area">
                    <input className="border-2 border-gray-600 rounded-md w-80" placeholder="Name" type="text" value={text} onChange={handleInputText} />
                    <button className="bg-blue-500 text-white px-3 rounded-md font-bold ml-1 hover:bg-blue-900 focus:ring-2 mt-2" onClick={handleInputBtn}>Add</button>
                </div>
                <ul className="mt-2">
                    {todo.map((item)=>{
                        return(
                            <li key="item" className="flex justify-between bg-blue-700 p-2 text-white rounded-lg mb-1 max-w-96">{item}<button onClick={()=>handleExitBtn(item)}>X</button></li>
                        );
                    })}
                </ul>
            </div>
        </div>
        </>
    );
}
export default Todo;