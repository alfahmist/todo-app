import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Edit from './edit';

function App() {
	// const [arr, setArr] = useState(['A', 'B', 'C', 'D', 'E']);
	const [arr, setArr] = useState([
		{ value: 'A', checked: false },
		{ value: 'B', checked: false },
		{ value: 'C', checked: false },
		{ value: 'D', checked: false },
		{ value: 'E', checked: false },
	]);
	const [input, setInput] = useState('');

	const get = (data) => {
		const newArr = [...arr];
		newArr[data.index].value = data.text;
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
						let arrTambah = {
							value: input,
							checked: false,
						};
						setArr([...arr, arrTambah]);
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
					<div key={String(item.value + key)}>
						<span>{key + 1}. </span>
						<Edit item={item.value} index={key} get={get} />
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
								console.log('click delete : ' + item.value);
								console.log(newArr);
							}}
						>
							Delete
						</button>
						{item.checked === false ? (
							<input
								type='checkbox'
								onChange={(res) => {
									// console.log(res.target.checked);
									// console.log(key);
									item.checked = res.target.checked;
									// console.log(item);
									const newArr = [...arr];
									newArr[key].checked = item.checked;
									setArr(newArr);
									console.log(newArr);
								}}

								// onClick={(res) => {
								// 	console.log(res);
								// }}
							/>
						) : (
							<input
								type='checkbox'
								onChange={(res) => {
									// console.log(res.target.checked);
									// console.log(key);
									item.checked = res.target.checked;
									// console.log(item);
									const newArr = [...arr];
									newArr[key].checked = item.checked;
									setArr(newArr);
									console.log(newArr);
								}}
								checked
								// onClick={(res) => {
								// 	console.log(res);
								// }}
							/>
						)}
					</div>
				);
			})}
			<button
				onClick={() => {
					let newArr = arr.filter((index) => {
						return index.checked !== true;
					});
					setArr(newArr);
					console.log('delete banyak');
					console.log(newArr);
				}}
			>
				Delete Banyak
			</button>
		</div>
	);
}

export default App;
