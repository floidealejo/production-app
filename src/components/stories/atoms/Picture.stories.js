import React from 'react';
import Picture from '../../atoms/Picture/Picture';

export default {
	title: 'Atoms/Picture',
	component: Picture,
};

export const Default = () => (
	<Picture src="https://placeimg.com/400/400/tech" width={200} />
);
