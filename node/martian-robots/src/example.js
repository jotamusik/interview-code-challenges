
export const Position = (x, y, orientation) => {
  let _x = x;
  let _y = y;
  let _orientation = orientation;

  return {
    getX: () => _x,
    getY: () => _y,
    getOrientation: () => _orientation,
  };
};

export const Mars = (width, height) => {
  let _width = width;
  let _height = height;
  return {
    getHeight: () => _height,
    getWidth: () => _width,
  };
};
