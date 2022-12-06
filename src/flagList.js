// 
// This file export flags - an object containing all the flags png from src / flags 
// 


function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    const fullKey = item.replace('./', '');
    const countryName = fullKey.replace('-flag-button-square-xs.png', '');
    images[countryName] = r(item);
  });
  return images;
}

const flags = importAll(require.context('./flags', false, /\.(png|jpe?g|svg)$/));

export default flags;