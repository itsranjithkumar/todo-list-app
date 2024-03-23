import React, { useEffect, useState } from "react"
import Create from './Create'
import axios from "axios";

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="Home">

            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0
                    ?
                    <div><h2>no Record</h2></div>
                    :
                    todos.map(todo => (
                        <div className="task">
                            <div className='checkbox'>
                                <BsCircleFill className='icon' />
                                <p>{todo.task}</p>
                            </div>
                            <div>
                                <span><BsfillTrashFill className='icon' /></span>
                            </div>
                            </div>
                            ))
               
                
                
            }
                        </div>
                    )
}

            export default Home