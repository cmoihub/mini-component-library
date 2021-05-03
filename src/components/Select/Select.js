import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  padding: 12px 16px;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  border: none;

  appearance: none;
  display: block;
  margin-right: 20px;
  margin-bottom: 20px;

  &:focus {
    border: 2px solid ${COLORS.primary};
    border-radius: 3px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
