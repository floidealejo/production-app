const { choices, decisions } = require('../tokens');
const fs = require('fs');

const toKebabCase =  (string) => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

const transformTokens = (parentKey, object) => {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((tokensTransformed, objectKey) =>{

    const value = object[objectKey];
  
    if (typeof value === 'object') {
      const customProperty = parentKey !== null 
      ? `${parentKey}-${objectKey}` 
      : `${objectKey}`
    
      return `
      ${tokensTransformed}
      ${transformTokens(`${toKebabCase(customProperty)}`,value)}`
    }

    const customProperty = parentKey !== null 
    ? `--${parentKey}-${objectKey}` 
    : `${parentKey}-${objectKey}`
    
    return `${tokensTransformed}
    ${toKebabCase(customProperty)}: ${value};`
  },"");

};

const buildCustomProperties = () => {
  const customProperties = `${transformTokens(null,choices)}${transformTokens(null,decisions)}`;

  const data = [":root{",customProperties.trim(),"}"].join(`\n`);
  
  fs.writeFile('./styles/tokens.css', data, 'utf8', (error) => {
    if (error) {
      return console.error(error);
    } else {
    }
  });
}


buildCustomProperties();