const Orientations = [ 'N', 'E', 'S', 'W' ];

export const Position = ( x, y, orientation ) => {
  if ( !Orientations.includes(orientation) ) {
    throw new Error('Orientation not supported');
  }

  let _x = x;
  let _y = y;
  let _orientation = orientation;

  const moveRight = () => {
    _orientation = Orientations[ ( Orientations.indexOf(_orientation) + 1 ) % Orientations.length ];
  };

  const moveLeft = () => {
    let orientationIndex = Orientations.indexOf(_orientation);
    if ( orientationIndex === 0 ) {
      orientationIndex = Orientations.length - 1;
    }
    else {
      orientationIndex -= 1;
    }
    _orientation = Orientations[ orientationIndex % Orientations.length ];
  };

  const moveForward = () => {
    switch ( _orientation ) {
      case 'N':
        _y += 1;
        break;
      case 'E':
        _x += 1;
        break;
      case 'S':
        _y -= 1;
        break;
      case 'W':
        _x -= 1;
        break;
    }
  };

  const move = ( movement ) => {
    if ( movement === 'R' ) {
      moveRight();
    }
    if ( movement === 'L' ) {
      moveLeft();
    }
    if ( movement === 'F' ) {
      moveForward();
    }
  };

  return {
    getX: () => _x,
    getY: () => _y,
    getOrientation: () => _orientation,
    move,
  };
};
