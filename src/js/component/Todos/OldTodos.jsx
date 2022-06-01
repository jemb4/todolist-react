import React, { useState } from "react";
import ItemCounter from "./Components/ItemCounter.jsx";
import DecorationBox from "./Components/DecorationBox.jsx";

const Todos = () => {
	const [tasks, setTasks] = useState("");
	const [taskArray, setTaskArray] = useState([]);
	const [hidden, setHidden] = useState(true);
	const [buttonShown, setButtonShown] = useState(false);

	const handleChange = (e) => {
		const { value } = e.target;
		setTasks(value);
	};

	const saveTask = () => {
		if (tasks && tasks.length != 0) {
			setTaskArray((prev) => {
				// api.updateUser({ label: tasks, done: false });
				return [...prev, tasks];
			});
			setHidden(false);
			setTasks("");
		}
	};

	const deleteTask = (key) => {
		const newTaskArray = taskArray.filter((task, index) => index != key);
		setTaskArray(newTaskArray);

		if (taskArray.length == 1) {
			setHidden(true);
		}
	};

	return (
		<>
			<h1>Todos List</h1>
			<input
				type="text"
				onChange={handleChange}
				placeholder="Write your task"
				value={tasks}
			/>
			<button onClick={saveTask}>ADD</button>
			<ul>
				<li className={hidden ? " " : "hidden"}>
					<p className="">You have nothing more to do :)</p>
				</li>
				{taskArray.map((task, i) => {
					return (
						<li
							id={i}
							className="todo-item"
							onMouseEnter={() => setButtonShown(true)}
							onMouseLeave={() => setButtonShown(false)}>
							{task} {/*task.done ? "done" : "not done"*/}
							{buttonShown && (
								<span
									aria-label="red cross"
									id={i}
									className="todo-item__remove"
									onClick={() => deleteTask(i)}
									role="img">
									❌
								</span>
							)}
						</li>
					);
				})}
			</ul>
			<DecorationBox classNumber="1" />
			<DecorationBox classNumber="2" />
		</>
	);
};

export default Todos;
