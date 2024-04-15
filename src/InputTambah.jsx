import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const InputTambah = (props) => {
	const [text, setText] = useState('');

	let handleAddButton = () => {
		if (text !== '') {
			let arrTambah = {
				value: text,
				checked: false,
			};
			props.setArr([...props.arr, arrTambah]);
			console.log('click tambah : ' + text);
			console.log(props.arr);
		}
		setText('');
	};

	let handleInput = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<Input type='text' onChange={handleInput} value={text} />
			<Button text='Tambah' onClick={handleAddButton} />
		</>
	);
};

export default InputTambah;
