import React, { Component } from 'react';
import styled from 'styled-components';
import Box from './Box';
import { NB_BOX, BOX_SIZE } from './utils/datas';
import _ from 'lodash';
import PropTypes from 'prop-types';

const gameSize = NB_BOX * BOX_SIZE;

const TOP = { direction: 'top', pos: -1 };
const BOTTOM = { direction: 'bottom', pos: 1 };
const LEFT = { direction: 'left', pos: -1 };
const RIGHT = { direction: 'right', pos: 1 };

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

const TaquinContainer = styled.div`
  width: ${gameSize}px;
  height: ${gameSize}px;
  border: solid 1px black;
  position: relative;
`;

export const changeBoxPosition = (
  directionX,
  directionY,
  boxId,
  prevPos
) => prevState => {
  return {
    tabBoxesPos: prevState.tabBoxesPos.map(box => {
      if (boxId === box.id) {
        return {
          ...box,
          x: box.x + directionX,
          y: box.y + directionY,
        };
      }
      if (box.isEmpty) {
        return {
          ...box,
          x: prevPos.x,
          y: prevPos.y,
        };
      }
      return box;
    }),
  };
};

export default class Taquin extends Component {
  state = {
    tabBoxesPos: tabTaquin,
  };

  checkGameWin() {
    if (_.isEqual(tabTaquin, this.state.tabBoxesPos)) {
      console.log('WIP : Victoire !');
    }
  }

  moveBox = boxId => {
    const { tabBoxesPos } = this.state;

    const boxClicked = tabBoxesPos.find(box => box.id === boxId);
    const emptyBox = tabBoxesPos.find(box => box.isEmpty);
    const prevPosition = { x: boxClicked.x, y: boxClicked.y };

    const isBelow =
      emptyBox.y === boxClicked.y + BOTTOM.pos && emptyBox.x === boxClicked.x;
    const isAbove =
      emptyBox.y === boxClicked.y + TOP.pos && emptyBox.x === boxClicked.x;
    const isRight =
      emptyBox.y === boxClicked.y && emptyBox.x === boxClicked.x + RIGHT.pos;
    const isLeft =
      emptyBox.y === boxClicked.y && emptyBox.x === boxClicked.x + LEFT.pos;

    if (isBelow) {
      this.moveBoxTo(undefined, BOTTOM.pos, boxClicked.id, prevPosition);
    } else if (isAbove) {
      this.moveBoxTo(undefined, TOP.pos, boxClicked.id, prevPosition);
    } else if (isRight) {
      this.moveBoxTo(RIGHT.pos, undefined, boxClicked.id, prevPosition);
    } else if (isLeft) {
      this.moveBoxTo(LEFT.pos, undefined, boxClicked.id, prevPosition);
    }
  };

  moveBoxTo(directionX = 0, directionY = 0, boxToMove, prevPosition) {
    this.setState(
      changeBoxPosition(directionX, directionY, boxToMove, prevPosition),
      () => this.checkGameWin()
    );
  }

  render() {
    const { tabBoxesPos } = this.state;
    return (
      <TaquinContainer>
        {tabBoxesPos.map(box => {
          return (
            <Box
              x={box.x}
              y={box.y}
              isEmpty={box.isEmpty}
              moveBox={this.moveBox}
              key={box.id}
              id={box.id}
              bgPos={box.bgPos}
            />
          );
        })}
      </TaquinContainer>
    );
  }
}

Taquin.propTypes = {
  setGameIsWon: PropTypes.func,
};
