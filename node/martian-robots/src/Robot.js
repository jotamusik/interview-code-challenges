
export const Robot = (x, y, orientation) => {
  let _x = x;
  let _y = y;
  let _orientation = orientation;

  return {
    getX: () => _x,
    getY: () => _y,
    getOrientation: () => _orientation,
  };
};