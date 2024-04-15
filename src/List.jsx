import { useState } from 'react';
import Button from './Button';
import Edit from './Edit';
import Input from './Input';
import Select from './Select';

const List = (props) => {
	// console.log(props);
	const options = ['todo', 'in-progress', 'done'];
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
		// console.log(key);
		props.item.checked = event.target.checked;
		// console.log(item);
		const newArr = [...props.arr];
		newArr[props.index].checked = props.item.checked;
		props.setArr(newArr);
		console.log('Checked : ' + props.item.checked);
		console.log(newArr);
	};

	let handleSelect = (event) => {
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
		<div>
			<span>{props.index + 1}. </span>
			{/* Status */}
			<Select
				defaultValue={props.item.status}
				onChange={handleSelect}
				data={options}
			/>
			{/* <Edit item={props.item.value} index={props.index} get={props.get} /> */}
			{edit ? (
				<>
					<Input type='text' value={text} onChange={handleInput} />
					<Button onClick={handleButtonDone} text='Done' />
				</>
			) : (
				<>
					<Input type='text' value={props.item.value} disabled />
					<Button onClick={handleButtonEdit} text='Edit' />
				</>
			)}
			<Button onClick={handleDelete} text='Delete' />
			<Input
				defaultChecked={props.item.checked}
				type='checkbox'
				onChange={handleCheck}
			/>
		</div>
	);
};

export default List;
