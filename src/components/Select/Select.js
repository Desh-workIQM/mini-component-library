import React, { useRef, useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const [EleW, setEleW] = useState(null);
  const [EleH, setEleH] = useState(null);
  const elementRef = useRef();
  const displayedValue = getDisplayedValue(value, children);
  // const width = useMemo(() => {
  //   console.log({ elementRef });
  //   return elementRef?.current?.clientWidth;
  // }, [elementRef]);
  // const height = useMemo(() => elementRef?.current?.clientHeight, [elementRef]);
  let width, height;

  useEffect(() => {
    if (elementRef) {
      setEleW(elementRef.current?.clientWidth);
      setEleH(elementRef?.current?.clientHeight);
    }
  }, [elementRef, elementRef.current, displayedValue]);
  return (
    <Wrapper>
      <NativeSelect
        value={value}
        onChange={onChange}
        width={EleW}
        height={EleH}
        styles={{ '--widhtH': width, '--heightH': height }}
      >
        {children}
      </NativeSelect>
      <Design ref={elementRef}>
        <SelectValue>{displayedValue}</SelectValue>
        <Icon id='chevron-down'></Icon>
      </Design>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  // width: ${(props) => `${props.width}px`}; */
  // height: ${(p) => `${p.height}px`};
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;
const Design = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  font-size: 1rem;
  display: flex;
  width: fit-content;
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
const SelectValue = styled.p`
  margin-right: 24px;
  display: flex;
  align-items: center;
`;

export default Select;
