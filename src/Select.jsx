const Select = (props) => {
	return (
		<select defaultValue={props.defaultValue} onChange={props.handleSelect}>
			{props.data.map((op, opKey) => {
				return (
					<option key={opKey} value={op}>
						{op}
					</option>
				);
			})}
		</select>
	);
};

export default Select;
