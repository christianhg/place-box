import { placeBox } from '../src';

describe(placeBox.name, () => {
  it('works', () => {
    expect(
      placeBox({
        boundary: { width: 200, height: 100 },
        coordinates: { x: 100, y: 50 },
        box: { width: 50, height: 50 },
      })
    ).toEqual({
      left: 75,
      top: 25,
    });

    expect(
      placeBox({
        boundary: { width: 200, height: 100 },
        coordinates: { x: 25, y: 25 },
        box: { width: 50, height: 50 },
      })
    ).toEqual({
      left: 0,
      top: 0,
    });

    expect(
      placeBox({
        boundary: { width: 200, height: 100 },
        coordinates: { x: 100, y: 50 },
        box: { width: 200, height: 200 },
      })
    ).toEqual({
      left: 0,
      top: -50,
    });

    expect(
      placeBox({
        boundary: { width: 200, height: 100 },
        coordinates: { x: 100, y: 50 },
        box: { width: 300, height: 50 },
      })
    ).toEqual({
      left: -50,
      top: 25,
    });

    expect(
      placeBox({
        boundary: { width: 200, height: 100 },
        coordinates: { x: 10, y: 100 },
        box: { width: 50, height: 50 },
      })
    ).toEqual({
      left: 0,
      top: 50,
    });

    expect(
      placeBox({
        boundary: { width: 200, height: 100 },
        coordinates: { x: 190, y: 100 },
        box: { width: 50, height: 50 },
      })
    ).toEqual({
      left: 150,
      top: 50,
    });

    expect(
      placeBox({
        boundary: { width: 200, height: 100 },
        coordinates: { x: 190, y: 10 },
        box: { width: 50, height: 50 },
      })
    ).toEqual({
      left: 150,
      top: 0,
    });
  });
});
