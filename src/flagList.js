//
// This file exports:
// flags - an object containing all the flags png from src / flags
// getRandomFlags - a function that get a number n and return an object with n random flags

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatName(fileName) {
  const rawName = fileName.replace('./', '').replace('-flag-button-square-xs.png', '');
  const countryName = rawName.split('-').map(capitalize).join(' ');
  return countryName;
}

function importAll(r) {
  let images = {};
  r.keys().forEach((fileName) => {
    const countryName = formatName(fileName);
    images[countryName] = r(fileName);
  });
  return images;
}

const flags = importAll(require.context('./flags', false, /\.(png|jpe?g|svg)$/));

function getRandomFlags(number) {
  if (number <= 0) return null;
  const countries = Object.keys(flags);
  if (number > countries.length) return null;
  const randomFlags = {};
  let counter = number;
  while (counter > 0) {
    const randomIndex = Math.round(Math.random() * countries.length);
    if (randomIndex === countries.length) continue;

    const country = countries[randomIndex];
    randomFlags[country] = flags[country];

    countries.splice(randomIndex, 1);
    counter -= 1;
  }
  return randomFlags;
}

export { flags, getRandomFlags };