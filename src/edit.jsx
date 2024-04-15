import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Edit = (props) => {
	// console.log(props);
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState(props.item);
	return (
		<>
			{edit ? (
				<>
					<Input
						type='text'
						value={text}
						onChange={(event) => {
							setText(event.target.value);
						}}
					/>
					<Button
						onClick={() => {
							setEdit(!edit);
							setText(text);
							console.log('Click Done : ' + text);
							props.get({ text: text, index: props.index });
						}}
						text='Done'
					/>
				</>
			) : (
				<>
					<Input type='text' value={props.item} disabled />
					<Button
						onClick={() => {
							setEdit(!edit);
							console.log('Click Edit : ' + text);
						}}
						text='Edit'
					/>
				</>
			)}
		</>
	);
};

export default Edit;
