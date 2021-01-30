const { choices, decisions } = require('../tokens');
const fs = require('fs');

const transformTokens = (parentKey, object) => {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((tokensTransformed, objectKey) =>{
    const value = object[objectKey];
  
    if (typeof value === 'object') {
      const customProperty = parentKey 
      ? `${parentKey}-${objectKey}` 
      : `${objectKey}`
      return `
      ${tokensTransformed} 
      ${transformTokens(`${customProperty}`,value)}`
    }

    const customProperty = parentKey ? `--${parentKey}-${objectKey}` : `${parentKey}-${objectKey}`
    return `
    ${tokensTransformed}
    ${customProperty}: ${value}`
  },"");

};
// const buildCustomProperties = () => {
  const choicesKeys = Object.keys(choices);
  const choicesStr = transformTokens(null,choices);
  // const choicesCustomProperties = choicesKeys.reduce((prev, curr) => {
  //   choices[curr];
  // }, '');
// };
const customProperties = choicesStr

const data = `
:root{
   ${customProperties}
}
`;

fs.writeFile('./tokens.css', data, 'utf8', (error) => {
  if (error) {
    return console.error(error);
  } else {
  }
});
