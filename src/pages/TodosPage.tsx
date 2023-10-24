import { FC, useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

export const TodosPage: FC = () => {
	const [todos, setTodos] = useState<Array<ITodo>>([])
	//add generic type


	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
		setTodos(saved)
	}, [])
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])


	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			title,
			id: Date.now(),
			completed: false
		}
		// setTodos([newTodo, ...todos])
		setTodos(prev => [newTodo, ...prev])
		// более корректная запись
	}
	const toggleHandler = (id: number) => {
		setTodos(prev => prev.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo

		}))
	}
	const removeHandler = (id: number) => {
		setTodos(prev => prev.filter(todo => todo.id !== id))
	}
	return (
		<>
			<TodoForm onAdd={addHandler} />
			<TodoList todos={todos}
				onToggle={toggleHandler}
				onRemove={removeHandler}
			/>
		</>
	)
}