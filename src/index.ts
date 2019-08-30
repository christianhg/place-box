export type Box = {
  width: number;
  height: number;
};

export type Coordinates = {
  x: number;
  y: number;
};

export type Position = {
  left: number;
  top: number;
};

export function placeBox({
  boundary,
  coordinates,
  box,
}: {
  boundary: Box;
  coordinates: Coordinates;
  box: Box;
}): Position {
  const left =
    box.width > boundary.width
      ? (boundary.width - box.width) / 2
      : coordinates.x - box.width / 2 < 0
      ? 0
      : box.width / 2 + coordinates.x > boundary.width
      ? boundary.width - box.width
      : coordinates.x - box.width / 2;
  const top =
    box.height > boundary.height
      ? (boundary.height - box.height) / 2
      : coordinates.y - box.height / 2 < 0
      ? 0
      : box.height / 2 + coordinates.y > boundary.height
      ? boundary.height - box.height
      : coordinates.y - box.height / 2;

  return {
    left,
    top,
  };
}
