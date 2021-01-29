const { choices, decisions } = require('../tokens');
const fs = require('fs');

const getValue = (object) => {
  if (typeof object === 'object') {
    getValue(object);
  } else {
    return '';
  }
};
const buildCustomProperties = () => {
  // const choicesKeys = Object.keys(choices);
  // const choicesCustomProperties = choicesKeys.reduce((prev, curr) => {
  //   choices[curr];
  // }, '');
};
// const customProperties =

const data = `
:root{
  // ${customProperties}
}
`;

fs.writeFile('./tokens.css', data, 'utf8', (error) => {
  if (error) {
    return console.error(error);
  } else {
  }
});
