/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    let a = preferences[i],
      b = preferences[a - 1],
      c = preferences[b - 1];
      
    if (c === i + 1) count++;
  }
  return Math.floor(count / 3);
};
