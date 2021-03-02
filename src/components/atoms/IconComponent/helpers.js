const ICONS_ASSETS_PATH = '/icons/';

const iconMap = {
	arrowRight: 'arrow-right',
	home: 'home-outline', //FIXME: Add
	angleDown: 'angle-down',
};

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`;
export const mapSize = () => null; //TODO:
