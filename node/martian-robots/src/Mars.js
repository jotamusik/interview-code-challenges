
export const Mars = (width, height) => {
  let _width = parseInt(width);
  let _height = parseInt(height);

  let _map = [];
  for ( let i = 0; i < _width; i++ ) {
    _map[i] = [];
    for ( let j = 0; j < _height; j++ ) {
      _map[i][j] = false;
    }
  }

  const hasSomeoneLostHere = (x, y) => _map[x][y];
  const setLostHere = (x, y) => _map[x][y] = true;

  return {
    getWidth: () => _width,
    getHeight: () => _height,
    hasSomeoneLostHere,
    setLostHere,
  };
};
