/* eslint-disable react/prop-types */
//import React from 'react'
import style from './TodoItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({todo, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className={style.item}>
        <FontAwesomeIcon icon={faCheck} onClick={() => toggleComplete(todo.id)}/>
        <div className={ todo.isCompleted? style.text__checked : style.text }>{todo.task}</div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)}/>
    </div>
  )
}