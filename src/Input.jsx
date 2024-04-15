const Input = (props) => {
	// console.log(props);
	switch (props.type) {
		case 'text':
			return (
				<input
					type={props.type}
					value={props.value}
					onChange={props.onChange}
					disabled={props.disabled}
				/>
			);
		case 'checkbox':
			return (
				<input
					type={props.type}
					defaultChecked={props.defaultChecked}
					onChange={props.onChange}
				/>
			);
	}
};

export default Input;
