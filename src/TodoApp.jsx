import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery()

    // for getTodoById
    const [todoId, setTodoId] = useState(1)
    const { data: todo } = useGetTodoQuery( todoId )
    const nextTodo = () => {
        setTodoId( todoId + 1 )
    }
    const prevTodo = () => {
        if ( todoId === 1) return
        setTodoId( todoId - 1 )
    }
    // end for getTodoById


    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False'}</h4>


            <ul>
                {
                    todos.map( todo => (
                        <li key={ todo.id } >{ todo.title }</li>
                        ) )
                    }
            </ul>

            <button>
                next todo
            </button>
                    
            <hr />
            
            <pre>{ JSON.stringify( todo ) }</pre>
            <button onClick={ prevTodo }>prevTodo</button>
            <button onClick={ nextTodo }>nextTodo</button>
        </>
    )
}