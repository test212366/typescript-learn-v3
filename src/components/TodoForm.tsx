import React, { FC, useRef, useState } from "react";

interface TodoFormProps {
	onAdd(title: string): void

}

export const TodoForm: FC<TodoFormProps> = (props) => {
	const ref = useRef<HTMLInputElement>(null)


	// const [title, setTitle] = useState<string>('')

	// const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(e.target.value)
	// 	console.log(title)
	// }
	const keyPressHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			props.onAdd(ref.current!.value)
			ref.current!.value = ''
			// console.log(title)
			// setTitle('')
		}
	}

	return (
		<div className="input-field mt2">
			<input ref={ref}
				// onChange={changeHandler}
				onKeyPress={keyPressHandler}
				type="text" id='title' placeholder="name todo" />
			<label htmlFor="title" className="active">name todo</label>
		</div>
	)
}