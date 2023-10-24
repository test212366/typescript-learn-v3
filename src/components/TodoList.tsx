import { type } from "os";
import { FC } from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
	todos: ITodo[]
	onToggle(id: number): void
	onRemove(id: number): void
	//something?:(...):void       ? - не обязательный параметр обозначает
}

export const TodoList: FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
	if (todos.length === 0) {
		return <p>none titles</p>
	}
	return (
		<ul>
			{todos.map(todo => {
				const classes = ['todo']
				if (todo.completed) {
					classes.push('completed')
				}

				return (
					<li className={classes.join(' ')} key={todo.id}>
						<label>
							<input type="checkbox" checked={todo.completed} onChange={onToggle?.bind(null, todo.id)} />
							<span>{todo.title}</span>
							<i className="material-icons red-text" onClick={() => onRemove(todo.id)}>delete</i>
						</label>
					</li>
				)
			})}

		</ul>
	)
}