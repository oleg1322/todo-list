/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './EditTodo.module.css'

export const EditTodo = ({editTodo, todo}) => {
    const [value, setValue] = useState(todo.task)    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value) {editTodo(value, todo.id); 
        setValue('')}
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Изменить задачу" className={style.form__input}
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
            />
            <button type='submit' className={style.form__button}>Изменитьь</button>
        </form>
    )
}
