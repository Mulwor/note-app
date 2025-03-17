// ? Link: https://leetcode.com/problems/destination-city/description/

// ? You are given the array paths, where paths[i] = [cityAi, cityBi] means there 
// ? exists a direct path going from cityAi to cityBi. Return the destination city, 
// ? that is, the city without any path outgoing to another city.

// ? It is guaranteed that the graph of paths forms a line without any loop, therefore,
// ? there will be exactly one destination city

var destCity = function(paths) {
  const cities = new Set();

  for (const path of paths) {
    // ? London, New York, Lima
    cities.add(path[0]);
  }

  for (const path of paths) {
    const dest = path[1];         // ? New York, Lima, Sao Paulo

    if (!cities.has(dest)) {
      return dest;
    }
  }

  return "";
};

var destCity = function(paths) {
  let startingCities = [];
  
  for(let i = 0; i < paths.length; i++) {
    startingCities.push(paths[i][0]);
  }

  for(let i = 0; i < paths.length; i++) {
    if(!startingCities.includes(paths[i][1])) {
      return paths[i][1];
    };
  };
};