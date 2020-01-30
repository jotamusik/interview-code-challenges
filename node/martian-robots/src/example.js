const Orientations = [ 'N', 'E', 'S', 'W' ];

export const Position = ( x, y, orientation ) => {
  if ( !Orientations.includes(orientation) ) {
    throw new Error('Orientation not supported');
  }

  let _x = x;
  let _y = y;
  let _orientation = orientation;

  const move = ( movement ) => {
    if ( movement === 'R' ) {
      _orientation = Orientations[ ( Orientations.indexOf(_orientation) + 1 ) % Orientations.length ];
    }
    if ( movement === 'L' ) {
      let orientationIndex = Orientations.indexOf(_orientation);
      if ( orientationIndex === 0 ) {
        orientationIndex = Orientations.length - 1;
      }
      else {
        orientationIndex -= 1;
      }
      _orientation = Orientations[ orientationIndex % Orientations.length ];
    }
  };

  return {
    getX: () => _x,
    getY: () => _y,
    getOrientation: () => _orientation,
    move,
  };
};

export const Robot = ( position ) => {
  let _position = position;

  const move = ( movement ) => {
    _position.move(movement);
  };

  return {
    getPosition: () => _position,
    move
  };
};

export const Mars = ( width, height ) => {
  let _width = width;
  let _height = height;
  return {
    getHeight: () => _height,
    getWidth: () => _width,
  };
};

