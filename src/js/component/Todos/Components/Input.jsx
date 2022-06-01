import React from "react";

const Input = ({
	input,
	setInput,
	tasks,
	setTasks,
	setTodosEmpty,
	counter,
	setCounter,
}) => {
	const setInputHandler = (e) => {
		setInput(e.target.value);
	};

	const newTodoHandler = (e) => {
		if (e.key === "Enter" && e.target.value !== "") {
			setTasks([
				...tasks,
				{
					id: `${new Date().valueOf()}`,
					text: `${input}`,
					finished: false,
				},
			]);
			setInput("");
			setTodosEmpty(false);
			setCounter(counter + 1);
		}
	};

	return (
		<input
			placeholder="What needs to be done?"
			type="text"
			value={input}
			onChange={setInputHandler}
			onKeyPress={newTodoHandler}
		/>
	);
};

export default Input;
