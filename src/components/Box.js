import React from 'react';
import styled from 'styled-components';
import { BOX_SIZE, TAQUIN_IMAGE, NB_BOX } from './utils/datas';
import PropTypes from 'prop-types';

const BG_SIZE = 800; //BOX_SIZE * NB_BOX

const BoxStyle = styled.div`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  background-image: url(${props => (props.isEmpty ? null : TAQUIN_IMAGE)});
  border: ${props => (props.isEmpty ? null : 'solid 1px black')};
  background-position: ${props => props.bgPos.x * -BOX_SIZE}px
    ${props => props.bgPos.y * -BOX_SIZE}px;
  position: absolute;
  top: ${props => props.y * BOX_SIZE}px;
  left: ${props => props.x * BOX_SIZE}px;
  background-size: ${BG_SIZE}px;
  cursor: pointer;
  transition: 0.2s;
  z-index: ${props => (props.isEmpty ? 0 : 1)};
`;

const Box = props => {
  function onClickMoveBox() {
    props.moveBox(props.id);
  }

  return (
    <BoxStyle
      x={props.x}
      y={props.y}
      isEmpty={props.isEmpty}
      onClick={onClickMoveBox}
      bgPos={props.bgPos}
    />
  );
};

export default Box;

Box.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  isEmpty: PropTypes.bool,
  moveBox: PropTypes.func,
  id: PropTypes.number,
  bgPos: PropTypes.object,
};
