
export function Mars(width, height) {
  let _width = width;
  let _height = height;
  return {
    getHeight: () => _height,
    getWidth: () => _width,
  };
};
