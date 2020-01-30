const Orientations = [ 'N', 'E', 'S', 'W' ];

export const Robot = (x, y, orientation) => {
  let _x = parseInt(x);
  let _y = parseInt(y);
  let _orientation = orientation;
  let _isLost = false;

  const _moveRight = () => {
    _orientation = Orientations[( Orientations.indexOf(_orientation) + 1 ) % Orientations.length];
  };

  const _moveLeft = () => {
    let orientationIndex = Orientations.indexOf(_orientation);
    if ( orientationIndex === 0 ) {
      orientationIndex = Orientations.length - 1;
    }
    else {
      orientationIndex -= 1;
    }
    _orientation = Orientations[orientationIndex % Orientations.length];
  };

  const _moveForward = () => {
    let nextX = _x;
    let nextY = _y;
    switch ( _orientation ) {
      case 'N':
        nextY += 1;
        break;
      case 'E':
        nextX += 1;
        break;
      case 'S':
        nextY -= 1;
        break;
      case 'W':
        nextX -= 1;
        break;
    }
    return { nextX, nextY };
  };

  const showLostStatus = () => _isLost ? ' LOST' : '';

  const startMission = (mission, planet) => {
    console.log(planet.hasSomeoneLostHere(_x, _y));
    const steps = mission.split('');
    for ( let movement of steps ) {
      if ( !_isLost ) {
        if ( movement === 'R' ) {
          _moveRight();
        }
        if ( movement === 'L' ) {
          _moveLeft();
        }
        if ( movement === 'F' ) {
          const { nextX, nextY } = _moveForward();
          if ( nextX >= planet.getWidth() || nextY >= planet.getHeight() ) {
            console.log(`${nextX} ${nextY}`);
            if ( !planet.hasSomeoneLostHere(_x, _y) ) {
              planet.setLostHere(_x, _y);
              _isLost = true;
            }
          }
          else {
            _x = nextX;
            _y = nextY;
          }
        }
      }
    }
    return `${_x} ${_y} ${_orientation}${showLostStatus()}`
  };

  return {
    getX: () => _x,
    getY: () => _y,
    getOrientation: () => _orientation,
    startMission,
  };
};
