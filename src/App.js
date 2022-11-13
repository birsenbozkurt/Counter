import { useState } from "react";

function App() {
	const [name, setName] = useState("Mehmet");
	const [age, setAge] = useState(29);
	const [friends, setFriends] = useState(["Ahmet", "Murat"]);
	const [address, setAddress] = useState({ title: "Istanbul", zip: 34756 });

	console.log(age, name);
	return (
		<div className="App">
			<h1>Merhaba {name}</h1>
			<h2>{age}</h2>
			<button onClick={() => setName("Ahmet")}>Change Name</button>
			<button onClick={() => setAge("28")}>Change Age</button>

			<hr />
			<br></br>
			<h2>Friends</h2>
			{friends.map((friend, index) => (
				<div key={index}>
					{index + 1}-{friend}
				</div>
			))}
			<br />
			<button onClick={() => setFriends([...friends, "Ayşe"])}>Add new Friend </button>

			<hr />
			<br></br>
			<h1>address</h1>
			<div>
				{address.title} {address.zip}
			</div>
			<br />
			<button onClick={() => setAddress({ ...address, title: "Ankara", zip: 66545 })}>Change Address </button>
		</div>
	);
}

export default App;
