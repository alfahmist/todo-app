import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Edit from './edit';

function App() {
	const [arr, setArr] = useState(['A', 'B', 'C', 'D', 'E']);
	const [input, setInput] = useState('');

	const get = (data) => {
		const newArr = [...arr];
		newArr[data.index] = data.text;
		setArr(newArr);
		console.log(newArr);
	};
	return (
		<div className='App'>
			{/* INPUT */}
			<input
				type='text'
				onChange={(event) => {
					setInput(event.target.value);
					// console.log(input);
				}}
				value={input}
			/>
			<button
				onClick={() => {
					if (input !== '') {
						setArr([...arr, input]);
						console.log(arr);
					}
					setInput('');
				}}
			>
				Tambah
			</button>

			{/* LIST */}
			{arr.map((item, key) => {
				return (
					<div key={String(item + key)}>
						<span>{key + 1}. </span>
						<Edit item={item} index={key} get={get} />
						{/* {edit ? (
							<input type='text' value={item} />
						) : (
							<input type='text' value={item} disabled />
						)}

						<button
							onClick={() => {
								setEdit(true);
							}}
						>
							Edit
						</button> */}
						<button
							onClick={() => {
								let newArr = arr.filter((index) => {
									return item !== index;
								});
								setArr(newArr);
								console.log('click delete : ' + item);
								console.log(newArr);
							}}
						>
							Delete
						</button>
						<input type='checkbox' />
					</div>
				);
			})}
		</div>
	);
}

export default App;
