import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import { choices } from '../../tokens';
import './Spacer.css';
const getSize = (size) => {
	return choices.spacing[size];
};
const Spacer = ({ size, isVisible }) => {
	return (
		<div
			className={classNames('spacer', { 'is-visible': isVisible })}
			style={{
				display: 'inline-block',
				width: getSize(size),
				height: getSize(size),
			}}
		/>
	);
};

Spacer.propTypes = {
	size: propTypes.number.isRequired,
	isVisible: propTypes.bool,
};

export default Spacer;
