
export const Mars = (width, height) => {

  let _map = [];
  for ( let i = 0; i < width; i++ ) {
    _map[i] = [];
    for ( let j = 0; j < height; j++ ) {
      _map[i][j] = false;
    }
  }

  const hasSomeoneLostHere = (x, y) => _map[x][y];
  const setLostHere = (x, y) => _map[x][y] = true;

  return {
    getWidth: () => width,
    getHeight: () => height,
    hasSomeoneLostHere,
    setLostHere,
  };
};
