import React from 'react';
import propTypes from 'prop-types';
import './Input.css';
const Input = ({ type, value, onChange, placeholder }) => {
	return (
		<>
			<input
				className="input"
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</>
	);
};

Input.propTypes = {
	// children: propTypes.node.isRequired,
	type: propTypes.objectOf['text'],
	value: propTypes.string,
	placeholder: propTypes.string,
	onChange: propTypes.func.isRequired,
};
Input.defaultProps = {
	type: 'text',
};
export default Input;
