
export const Position = ( x, y ) => {
  let _x = x;
  let _y = y;

  return {
    getX: () => _x,
    getY: () => _y,
  };
};

// const Orientations = [ 'N', 'E', 'S', 'W' ];
// const moveRight = () => {
//   _orientation = Orientations[ ( Orientations.indexOf(_orientation) + 1 ) % Orientations.length ];
// };
//
// const moveLeft = () => {
//   let orientationIndex = Orientations.indexOf(_orientation);
//   if ( orientationIndex === 0 ) {
//     orientationIndex = Orientations.length - 1;
//   }
//   else {
//     orientationIndex -= 1;
//   }
//   _orientation = Orientations[ orientationIndex % Orientations.length ];
// };
//
// const moveForward = () => {
//   switch ( _orientation ) {
//     case 'N':
//       _y += 1;
//       break;
//     case 'E':
//       _x += 1;
//       break;
//     case 'S':
//       _y -= 1;
//       break;
//     case 'W':
//       _x -= 1;
//       break;
//   }
// };
//
// const move = ( movement ) => {
//   if ( movement === 'R' ) {
//     moveRight();
//   }
//   if ( movement === 'L' ) {
//     moveLeft();
//   }
//   if ( movement === 'F' ) {
//     moveForward();
//   }
// };
