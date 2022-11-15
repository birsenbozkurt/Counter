import { useState } from "react";

function InputExample() {
	const [form, setForm] = useState({ name: "", surname: "" });

	const onChangeInput = (e) => {
		console.log(e.target.name);

		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div>
			Name <br />
			<input name="name" value={form.name} onChange={onChangeInput} />
			{/* Buradaki event.target input’un ta kendisidir. */}
			<br />
			<br />
			Surname <br />
			<input value={form.surname} onChange={onChangeInput} />
			<br />
			<br /> <br />
			Hoşgeldiniz {form.name} {form.surname}
		</div>
	);
}

export default InputExample;
