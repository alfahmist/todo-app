import './App.css';
import { useState } from 'react';
import Button from './Button';
import List from './List';
import InputTambah from './InputTambah';
import NoList from './NoList';

function App() {
	let handleMultipleDeleteButton = () => {
		let newArr = arr.filter((index) => {
			return index.checked !== true;
		});
		setArr(newArr);
		console.log('delete banyak');
		console.log(newArr);
	};
	// const [arr, setArr] = useState(['A', 'B', 'C', 'D', 'E']);
	const [arr, setArr] = useState([
		{ value: 'A', checked: false, status: 'todo' },
		{ value: 'B', checked: false, status: 'in-progress' },
		{ value: 'C', checked: false, status: 'done' },
		{ value: 'D', checked: false, status: 'todo' },
		{ value: 'E', checked: false, status: 'todo' },
	]);
	// const options = ['todo', 'in-progress', 'done'];
	// const [text, setText] = useState('');

	const get = (data) => {
		const newArr = [...arr];
		newArr[data.index].value = data.text;
		setArr(newArr);
		console.log(newArr);
	};
	return (
		<div className='App'>
			{/* INPUT */}
			<InputTambah arr={arr} setArr={setArr} />
			<div>
				<span>status</span>
				<span>text</span>
				<span>edit</span>
				<span>delete</span>
				<span>choose</span>
			</div>
			{/* LIST */}
			{arr.length !== 0 ? (
				arr.map((item, index) => {
					return (
						<List
							key={index + item.value}
							arr={arr}
							setArr={setArr}
							item={item}
							index={index}
							get={get}
						/>
					);
				})
			) : (
				<NoList />
			)}
			<Button onClick={handleMultipleDeleteButton} text='Delete Banyak' />
		</div>
	);
}

export default App;
