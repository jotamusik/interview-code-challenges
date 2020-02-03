
export const Mars = (width, height) => {

  let map = [];

  const initPlanet = () => {
    for ( let i = 0; i < width; i++ ) {
      map[i] = [];
      for ( let j = 0; j < height; j++ ) {
        map[i][j] = false;
      }
    }
    return map;
  };

  const hasSomeoneLostHere = (x, y) => map[x][y];
  const setLostHere = (x, y) => map[x][y] = true;

  return {
    initPlanet,
    getWidth: () => width,
    getHeight: () => height,
    hasSomeoneLostHere,
    setLostHere,
  };
};
