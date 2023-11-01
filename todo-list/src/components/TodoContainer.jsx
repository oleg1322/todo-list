import { useState } from 'react'
import style from './TodoContainer.module.css'
import { TodoForm } from './TodoForm/TodoForm'
import { TodoItem } from './TodoItem/TodoItem'
//import { todos as todosData } from './todos.data.js'
import { EditTodo } from './EditTodo/EditTodo'

export const TodoContainer = () => {
    
    const [todos, setTodos] = useState([])//отслеживает состояние задач
    
    const addTodo = todo => setTodos([{id: Date(),
                                         task: todo,
                                         isCompleted: false,
                                         isEditing: false}, ...todos]
    )

    const toggleComplete = itemId => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === itemId ? { ...todo, isCompleted: !todo.isCompleted } : todo
          )
        );
    };

    const deleteTodo = (itemId) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== itemId));
      };

    const editTodo = (itemId) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === itemId ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
    };

    const editTodoItem = (itemTask, itemId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === itemId ? { ...todo, task: itemTask, isEditing: !todo.isEditing } : todo
            )
      );
    }
      
    return (
    <div className={style.todo__container}>
        <div className={style.container__header}>
            <h1>Todo-list</h1>
        </div>
        <TodoForm addTodo={addTodo}/>
        <div className={style.todo__items}>
            {todos.length?(todos.map((todo) => //рендер каждого todo
                // eslint-disable-next-line react/jsx-key
                todo.isEditing? <EditTodo editTodo={editTodoItem} todo={todo}/>
                : <TodoItem key={todo.id} todo={todo} 
                            toggleComplete={toggleComplete} 
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}/>
            ))
            :<div className={style.no__todos}>Нет текущих задач</div>}
        </div>
    </div>
  )
}


export default TodoContainer