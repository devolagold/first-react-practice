import { useState, useEffect } from "react"
import axios from "axios";
import Header from "./components/Header"
import TodoList from "./components/TodoList";


export default function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=7")
            .then(response => {
                console.log(response.data);
                setTodos(response.data)
            })
            .catch(error => console.log(error));
    }, [])

    return (
            <div className="p-3 bg-[#E0E1E7] flex flex-col space-y-4 justify-center items-center w-screen h-screen">
                <div className="md:w-1/2 content bg-white p-6 md:p-8 shadow-sm rounded-lg">

                    <Header/>
                    
                    <div className="grid grid-cols-1 gap-6 my-4 mt-8">
                        {todos ? <TodoList todos = {todos}/> : "No todos"}
                    </div>

                </div>

                            {/* {todos.map(user => {
                return(
                    <div key={user.id}>
                        <p>{user.title}</p>
                        <input type="radio" checked={user.completed} onChange={null}/>
                    </div>
                )
            })} */}
            </div>  
    )
}