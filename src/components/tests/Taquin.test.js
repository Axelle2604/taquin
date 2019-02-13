import { changeBoxPosition } from '../Taquin.js';
const tabTaquin = [
  // FIRST ROW
  { x: 0, y: 0, isEmpty: false, id: 0, bgPos: { x: 0, y: 0 } },
  { x: 1, y: 0, isEmpty: false, id: 1, bgPos: { x: 1, y: 0 } },
  { x: 2, y: 0, isEmpty: false, id: 2, bgPos: { x: 2, y: 0 } },
  { x: 3, y: 0, isEmpty: false, id: 3, bgPos: { x: 3, y: 0 } },
  // SECOND ROW
  { x: 0, y: 1, isEmpty: false, id: 4, bgPos: { x: 0, y: 1 } },
  { x: 1, y: 1, isEmpty: false, id: 5, bgPos: { x: 1, y: 1 } },
  { x: 2, y: 1, isEmpty: false, id: 6, bgPos: { x: 2, y: 1 } },
  { x: 3, y: 1, isEmpty: false, id: 7, bgPos: { x: 3, y: 1 } },
  // THIRD ROW
  { x: 0, y: 2, isEmpty: false, id: 8, bgPos: { x: 0, y: 2 } },
  { x: 1, y: 2, isEmpty: false, id: 9, bgPos: { x: 1, y: 2 } },
  { x: 2, y: 2, isEmpty: true, id: 10, bgPos: { x: 2, y: 2 } },
  { x: 3, y: 2, isEmpty: false, id: 11, bgPos: { x: 3, y: 2 } },
  // FOURTH ROW
  { x: 0, y: 3, isEmpty: false, id: 12, bgPos: { x: 0, y: 3 } },
  { x: 1, y: 3, isEmpty: false, id: 13, bgPos: { x: 1, y: 3 } },
  { x: 2, y: 3, isEmpty: false, id: 14, bgPos: { x: 2, y: 3 } },
  { x: 3, y: 3, isEmpty: false, id: 15, bgPos: { x: 3, y: 3 } },
];

const tabTaquin2 = [
  // FIRST ROW
  { x: 0, y: 1, isEmpty: false, id: 0, bgPos: { x: 0, y: 0 } },
  { x: 1, y: 0, isEmpty: false, id: 1, bgPos: { x: 1, y: 0 } },
  { x: 2, y: 0, isEmpty: false, id: 2, bgPos: { x: 2, y: 0 } },
  { x: 3, y: 0, isEmpty: false, id: 3, bgPos: { x: 3, y: 0 } },
  // SECOND ROW
  { x: 0, y: 1, isEmpty: false, id: 4, bgPos: { x: 0, y: 1 } },
  { x: 1, y: 1, isEmpty: false, id: 5, bgPos: { x: 1, y: 1 } },
  { x: 2, y: 1, isEmpty: false, id: 6, bgPos: { x: 2, y: 1 } },
  { x: 3, y: 1, isEmpty: false, id: 7, bgPos: { x: 3, y: 1 } },
  // THIRD ROW
  { x: 0, y: 2, isEmpty: false, id: 8, bgPos: { x: 0, y: 2 } },
  { x: 1, y: 2, isEmpty: false, id: 9, bgPos: { x: 1, y: 2 } },
  { x: 0, y: 0, isEmpty: true, id: 10, bgPos: { x: 2, y: 2 } },
  { x: 3, y: 2, isEmpty: false, id: 11, bgPos: { x: 3, y: 2 } },
  // FOURTH ROW
  { x: 0, y: 3, isEmpty: false, id: 12, bgPos: { x: 0, y: 3 } },
  { x: 1, y: 3, isEmpty: false, id: 13, bgPos: { x: 1, y: 3 } },
  { x: 2, y: 3, isEmpty: false, id: 14, bgPos: { x: 2, y: 3 } },
  { x: 3, y: 3, isEmpty: false, id: 15, bgPos: { x: 3, y: 3 } },
];

test('Should return a new tab of boxes positions.', () => {
  expect(
    changeBoxPosition(0, 1, 0, { x: 0, y: 0 })({
      tabBoxesPos: tabTaquin,
    })
  ).toEqual({
    tabBoxesPos: tabTaquin2,
  });
});
