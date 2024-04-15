import { useState } from 'react';

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
		<div className='flex mb-10 h-10'>
			<input
				type='text'
				onChange={handleInput}
				value={text}
				className='focus:outline-none pl-2 flex-1 text-2xl'
			/>
			<button
				onClick={handleAddButton}
				className='bg-green-200 px-4 text-xl font-medium hover:bg-green-300'
			>
				Tambah
			</button>
		</div>
	);
};

export default InputTambah;
