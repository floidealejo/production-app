export const getWith = (width) => {
	typeof width === 'string' ? width : `${width}px`;
};
