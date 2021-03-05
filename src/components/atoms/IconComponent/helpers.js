const ICONS_ASSETS_PATH = '/icons/';

const iconMap = {
	arrowRight: 'arrow-right',
	home: 'home-outline', //FIXME: Add
	angleDown: 'angle-down',
};
const iconSize = {
	sm: 16,
	md: 20,
	lg: 30,
	xl: 40,
};

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`;
export const mapSize = (size) => iconSize[size];
