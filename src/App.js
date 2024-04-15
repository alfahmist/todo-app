import './App.css';
import { useState } from 'react';
import List from './components/List';
import InputTambah from './components/InputTambah';
import NoList from './components/NoList';

function App() {
	let handleDeleteSelected = () => {
		let isSelected = arr.some((obj) => {
			return obj.checked === true;
		});

		if (isSelected) {
			const selectedList = arr.filter((index) => {
				return index.checked === true;
			});
			console.log('deleted List : ');
			console.log(selectedList);

			const newArr = arr.filter((index) => {
				return index.checked !== true;
			});
			setArr(newArr);
		} else {
			console.log('Belum ada yang dipilih');
		}
	};
	// const [arr, setArr] = useState(['A', 'B', 'C', 'D', 'E']);
	const [arr, setArr] = useState([
		{ value: 'A', checked: false, status: 'Todo' },
		{ value: 'B', checked: false, status: 'In-progress' },
		{ value: 'C', checked: false, status: 'Done' },
		{ value: 'D', checked: false, status: 'Todo' },
		{ value: 'E', checked: false, status: 'Todo' },
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
		<div className='container text-center bg-slate-100 w-[1000px] mx-auto rounded-lg py-16 mt-10'>
			{/* Todo */}
			<div className='px-10'>
				<h1 className='mb-4 text-3xl font-bold'>To Do List</h1>
				{/* INPUT */}

				<InputTambah arr={arr} setArr={setArr} />
				<div className='flex justify-end mb-2'>
					<button
						onClick={handleDeleteSelected}
						className='bg-red-200 px-4 text-xl font-medium hover:bg-red-300'
					>
						Delete yang dipilih
					</button>
				</div>
				<div className='grid grid-cols-12 mb-2 text-lg bg-slate-300 rounded-lg py-2'>
					<span className='border-r-8 border-slate-100'>No</span>
					<span className='border-r-8 border-slate-100 col-span-2'>Status</span>
					<span className='border-r-8 border-slate-100 col-span-6'>Text</span>
					<span className='border-r-8 border-slate-100'>Edit</span>
					<span className='border-r-8 border-slate-100'>Delete</span>
					<span>Select</span>
				</div>

				{/* LIST */}
				{arr.length !== 0 ? (
					arr.map((item, index) => {
						return (
							<div className='mb-4 h-14' key={index + item.value}>
								<div className='grid grid-cols-12 h-full gap-2'>
									<List
										arr={arr}
										setArr={setArr}
										item={item}
										index={index}
										get={get}
									/>
								</div>
							</div>
						);
					})
				) : (
					<NoList />
				)}
			</div>
		</div>
	);
}

export default App;
