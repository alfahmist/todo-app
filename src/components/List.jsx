import { useState } from 'react';

const List = (props) => {
	// console.log(props);
	const options = ['Todo', 'In-progress', 'Done'];
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState(props.item.value);

	let handleInput = (event) => {
		setText(event.target.value);
	};

	let handleDelete = () => {
		let newArr = props.arr.filter((index) => {
			return props.item !== index;
		});
		props.setArr(newArr);
		console.log('click delete : ' + props.item.value);
		console.log(newArr);
	};

	let handleCheck = (event) => {
		// console.log(event.target.checked);
		props.item.checked = event.target.checked;
		// console.log(item);
		const newArr = [...props.arr];
		newArr[props.index].checked = props.item.checked;
		props.setArr(newArr);
		console.log('Checked : ' + props.item.checked);
		console.log(newArr);

		const selectedList = newArr.filter((select) => {
			return select.checked === true;
		});
		console.log('selected : ');
		console.log(selectedList);
	};

	let handleSelectOption = (event) => {
		console.log(event.target.value);
		const newArr = [...props.arr];
		newArr[props.index].status = event.target.value;
		props.setArr(newArr);
		console.log(newArr);
	};

	let handleButtonEdit = () => {
		setEdit(!edit);
		console.log('Click Edit : ' + text);
		console.log(props.item.value);
	};

	let handleButtonDone = () => {
		setEdit(!edit);
		setText(text);
		props.get({ text: text, index: props.index });
		console.log('Click Done : ' + text);
	};

	return (
		<>
			<span className='self-center'>{props.index + 1}. </span>
			{/* Status */}
			<select
				defaultValue={props.item.status}
				onChange={handleSelectOption}
				className='col-span-2 focus:outline-none text-lg'
			>
				{options.map((op, opKey) => {
					return (
						<option key={opKey} value={op}>
							{op}
						</option>
					);
				})}
			</select>

			{/* <Edit item={props.item.value} index={props.index} get={props.get} /> */}
			<div className='col-span-6'>
				{edit ? (
					<>
						<input
							type='text'
							value={text}
							onChange={handleInput}
							className='w-full pl-2 focus:outline-none h-full text-lg border-b-2 border-slate-900 bg-white'
							name={String(props.index)}
							id={String(props.index)}
						/>
					</>
				) : (
					<>
						<input
							type='text'
							value={props.item.value}
							className='w-full pl-2 focus:outline-none h-full text-lg border-b-2 border-transparent bg-white'
							disabled
							name={String(props.index)}
							id={String(props.index)}
						/>
					</>
				)}
			</div>

			{edit ? (
				<>
					<label
						onClick={handleButtonDone}
						className='text-lg focus:outline-none self-center cursor-pointer'
						htmlFor={String(props.index)}
					>
						Done
					</label>
				</>
			) : (
				<>
					<label
						onClick={handleButtonEdit}
						className='text-lg focus:outline-none self-center cursor-pointer'
						htmlFor={String(props.index)}
					>
						Edit
					</label>
				</>
			)}
			<button onClick={handleDelete} className='text-lg'>
				Delete
			</button>

			<input
				defaultChecked={props.item.checked}
				type='checkbox'
				onChange={handleCheck}
				className='w-5 h-5 self-center mx-auto'
			/>
		</>
	);
};

export default List;
