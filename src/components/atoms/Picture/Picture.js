import React from 'react';
import propTypes from 'prop-types';
import { getWith } from './helpers';
const Picture = ({ width, src }) => {
	return (
		<>
			<picture className="picture">
				<img src={src} style={{ maxWidth: getWith(width) }} />
			</picture>
		</>
	);
};

Picture.propTypes = {
	width: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
	src: propTypes.string.isRequired,
};

Picture.defaultProps = {
	width: 'text' || 'number',
	src: 'text',
};

export default Picture;
