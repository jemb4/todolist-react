const createUser = (name) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user", {
		method: "POST",
		body: JSON.stringify([]),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			console.log({ status: res.status });
			return res.json();
		})
		.then((res) => {
			console.log({ res });
		})
		.catch((err) => {
			console.log({ err });
		});
};

const updateUser = (name, data) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/jmartin", {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			console.log({ status: res.status });
			return res.json();
		})
		.then((res) => {
			console.log({ res });
		})
		.catch((err) => {
			console.log({ err });
		});
};

const deleteUser = (name) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			console.log({ status: res.status });
			return res.json();
		})
		.then((res) => {
			console.log({ res });
		})
		.catch((err) => {
			console.log({ err });
		});
};

export default {
	createUser,
	deleteUser,
	updateUser,
};
