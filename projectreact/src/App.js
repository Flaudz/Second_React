import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
	const [users, setUsers] = useState([
		{ name: "Ed", message: "Hello there" },
		{ name: "Nicolaj", message: "Whatt upppp" },
		{ name: "Jimmy", message: "Christian er White Theme Boiiii" }
	]);

	return (
		<div>
			{users.map((user) => (
				<Tweet name={user.name} message={user.message} />
			))}
		</div>
	);
}

export default App;
