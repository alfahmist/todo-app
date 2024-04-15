import { useState } from 'react';

const Edit = (props) => {
	// console.log(props);
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState(props.item);
	return (
		<>
			{edit ? (
				<>
					<input
						type='text'
						value={text}
						onChange={(event) => {
							setText(event.target.value);
						}}
					/>
					<button
						onClick={() => {
							setEdit(!edit);
							setText(text);
							console.log('Click Done : ' + text);
							props.get({ text: text, index: props.index });
						}}
					>
						Done
					</button>
				</>
			) : (
				<>
					<input type='text' value={props.item} disabled />
					<button
						onClick={() => {
							setEdit(!edit);
							console.log('Click Edit : ' + text);
						}}
					>
						Edit
					</button>
				</>
			)}
		</>
	);
};

export default Edit;
