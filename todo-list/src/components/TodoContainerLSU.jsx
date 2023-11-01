import { useEffect, useState } from 'react'
import style from './TodoContainer.module.css'
import { TodoForm } from './TodoForm/TodoForm'
import { TodoItem } from './TodoItem/TodoItem'
//import { todos as todosData } from './todos.data.js'
import { EditTodo } from './EditTodo/EditTodo'

export const TodoContainerLSU = () => {
    
    const [todos, setTodos] = useState([])

    useEffect(() => {
      const localTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(localTodos);
    }, []); 
    
    const addTodo = (todo) => {
      const newTodos = [...todos, {id: Date(), task: todo, isCompleted: false, isEditing: false}];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const toggleComplete = itemId => {
      console.log(itemId)
      const newTodos = todos.map(todo => todo.id === itemId ? {...todo, isCompleted: !todo.isCompleted} : todo);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const deleteTodo = itemId => {
      const newTodos = todos.filter(todo => todo.id !== itemId);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const editTodo = itemId => {
      setTodos(todos.map(todo => todo.id === itemId ? {...todo, isEditing: !todo.isEditing} : todo))
    };

    const editTodoItem = (itemTask, itemId) => {
      const newTodos = todos.map(todo => todo.id === itemId ? { ...todo, task: itemTask, isEditing: !todo.isEditing } : todo
                                      /*todo.id === itemId ? {...todo, itemTask, isEditing: !todo.isEditing} : todo*/);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };
      
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


export default TodoContainerLSU