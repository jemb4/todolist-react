import React from "react";
import CreateTask from "./CreateTask.jsx";

const TodoList = ({ tasks, setTasks, setTodosEmpty, counter, setCounter }) => {
	return (
		<ul>
			{tasks.map((x) => {
				if (x.finished === false)
					return (
						<CreateTask
							key={x.id}
							id={x.id}
							text={x.text}
							tasks={tasks}
							setTasks={setTasks}
							setTodosEmpty={setTodosEmpty}
							counter={counter}
							setCounter={setCounter}
						/>
					);
			})}
		</ul>
	);
};

export default TodoList;
