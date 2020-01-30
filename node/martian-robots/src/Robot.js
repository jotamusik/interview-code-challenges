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
