# Place Box

> Places a box within a boundary using a set of coordinates.

[![npm module](https://badge.fury.io/js/place-box.svg)](https://www.npmjs.org/package/place-box)
[![Coverage Status](https://coveralls.io/repos/github/christianhg/place-box/badge.svg?branch=master)](https://coveralls.io/github/christianhg/place-box?branch=master)
[![Build Status](https://travis-ci.org/christianhg/place-box.svg?branch=master)](https://travis-ci.org/christianhg/place-box)
[![Dependencies](https://david-dm.org/christianhg/place-box.svg)](https://david-dm.org/christianhg/place-box)
[![devDependencies Status](https://david-dm.org/christianhg/place-box/dev-status.svg)](https://david-dm.org/christianhg/place-box?type=dev)

```js
placeBox({
  boundary: { width: 200, height: 100 },
  coordinates: { x: 100, y: 50 },
  box: { width: 50, height: 50 },
});
// => { left: 75, top: 25 }
```
