/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Wrapper;
  switch (size) {
    case 'small':
      Wrapper = sPB;
      break;
    case 'large':
      Wrapper = lPB;
      break;
    default:
      Wrapper = mPB;
  }
  return (
    <>
      <input value={value} type='range' />
      <Wrapper
        role='progressbar'
        aria-valuenow={value}
        aria-valuemin={'0'}
        aria-valuemax={'100'}
      >
        <BarWrapper>
          <Mainbar value={value}></Mainbar>
        </BarWrapper>
      </Wrapper>
    </>
  );
};

const BaseWrapper = styled.div`
  border-radius: 4px;
  min-width: 370px;
  background-color: ${COLORS.transparentGray15};
  display: flex;
  /* overflow: hidden; */
  align-items: center;
  justify-content: start;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const sPB = styled(BaseWrapper)`
  height: 8px;
`;
const mPB = styled(BaseWrapper)`
  height: 12px;
`;
const lPB = styled(BaseWrapper)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;

const Mainbar = styled.div`
  height: 100%;
  border-radius: 4px 0 0 4px;
  width: ${(p) => `${p.value}%`};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
