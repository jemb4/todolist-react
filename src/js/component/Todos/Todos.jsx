import React, { useState, useEffect } from "react";
import "./Todos.css";
import Input from "./Components/Input.jsx";
import TodoList from "./Components/TodoList.jsx";
import EmptyList from "./Components/EmptyList.jsx";
import ItemCounter from "./Components/ItemCounter.jsx";
import DecorationBox from "./Components/DecorationBox.jsx";
import Header from "./Components/Header.jsx";

const Todos = () => {
	const [input, setInput] = useState("");
	const [tasks, setTasks] = useState([]);
	const [todosEmpty, setTodosEmpty] = useState(true);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (
			tasks.length === 0 ||
			tasks.every((x) => {
				return x.finished;
			})
		) {
			setTodosEmpty(true);
		}
	}, [tasks]);

	return (
		<>
			<div className="header">
				<Header />
				<ul className="list">
					<li>
						<Input
							input={input}
							setInput={setInput}
							tasks={tasks}
							setTasks={setTasks}
							setTodosEmpty={setTodosEmpty}
							counter={counter}
							setCounter={setCounter}
						/>
					</li>
					<li>
						{todosEmpty ? (
							<EmptyList />
						) : (
							<>
								<TodoList
									className="todo-list"
									tasks={tasks}
									setTasks={setTasks}
									counter={counter}
									setCounter={setCounter}
								/>
								<ItemCounter counter={counter} />
							</>
						)}
					</li>
				</ul>
				<DecorationBox classNumber="1" />
				<DecorationBox classNumber="2" />
			</div>
		</>
	);
};

export default Todos;
