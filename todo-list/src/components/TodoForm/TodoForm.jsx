/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './TodoForm.module.css'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value) {addTodo(value); 
        setValue('')}
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Добавить задачу" className={style.form__input}
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
            />
            <button type='submit' className={style.form__button}>Добавить</button>
        </form>
    )
}
