const Orientations = [ 'N', 'E', 'S', 'W' ];

export const Robot = (x, y, orientation) => {
  let isLost = false;

  const moveRight = () => {
    // This code is not symmetric to moveLeft because of performance reason
    orientation = Orientations[( Orientations.indexOf(orientation) + 1 ) % Orientations.length];
  };

  const moveLeft = () => {
    let orientationIndex = Orientations.indexOf(orientation);
    if ( orientationIndex === 0 ) {
      orientationIndex = Orientations.length - 1;
    }
    else {
      orientationIndex -= 1;
    }
    orientation = Orientations[orientationIndex % Orientations.length];
  };

  const getNextPosition = () => {
    let nextX = x;
    let nextY = y;
    switch ( orientation ) {
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

  const moveForward = planet => {
    const { nextX, nextY } = getNextPosition();

    const isGettingLost = nextX >= planet.getWidth() || nextY >= planet.getHeight();

    if ( isGettingLost ) {
      if ( !planet.hasSomeoneLostHere(x, y) ) {
        planet.setLostHere(x, y);
        isLost = true;
      }
    }
    else {
      x = nextX;
      y = nextY;
    }
  };

  const showLostStatus = () => isLost ? ' LOST' : '';

  const startMission = (mission, planet) => {
    const steps = mission.split('');
    const perform = {
      ['R']: moveRight,
      ['L']: moveLeft,
      ['F']: moveForward
    };
    for ( let movement of steps ) {
      if ( !isLost ) {
        perform[movement](planet);
      }
    }
    return `${x} ${y} ${orientation}${showLostStatus()}`;
  };

  return {
    getX: () => x,
    getY: () => y,
    getOrientation: () => orientation,
    startMission,
  };
};
