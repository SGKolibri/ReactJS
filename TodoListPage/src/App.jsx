import "./styles.css"
import { useEffect, useState } from "react"
import { NewTodoForm } from "./components/NewTodoForm"
import { TodoList } from "./components/TodoList"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  /*
    useEffect definition: 
    A function that takes another function and an array as arguments;
    and everytime the second property changes, the first function is called and executed.
  */

  useEffect(() => {
    /*
      So, whenever 'todos' is modified, the useEffect() runs its first property,
      which takes the modified 'todos' and stores it locally.
    */
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function modifyTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  return (
    <>
      <NewTodoForm modifyTodo={modifyTodo} />
      <h1 className="header">Lista de afazeres</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}