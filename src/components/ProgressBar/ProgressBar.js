/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    padding: 0,
    height: 8 + "px",
    fontSize: "50%",
  },
  medium: {
    padding: 0,
    height: 12 + "px",
    fontSize: "90%",
  },
  large: {
    padding: "4px",
    height: 24 + "px",
    fontSize: "100%",
  },
};

const ProgressBar = ({ value, size }) => {
  if (value < 0) {
    value = 0;
  } else if (value > 100) {
    value = 100;
  }
  const styles = { ...SIZES[size] };
  let borderRadius;
  if (value > 99 && value !== 100) {
    borderRadius = "2px";
  } else if (value === 100) {
    borderRadius = "4px";
  }
  return (
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuetext={value}
      aria-valuemax="100"
    >
      <Bar style={{ "--borderRadius": borderRadius }} value={value}>
        {value}
      </Bar>
    </Wrapper>
  );
};

const height = "24";

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;
  border-radius: 8px;
  height: var(--height);
  padding: var(--padding);
  font-size: var(--fontSize);
  text-align: center;
  color: white;
  margin-bottom: 20px;
`;

const Bar = styled.div`
  --border-radius: var(--borderRadius, 4px 0px 0px 4px);
  width: ${(props) => props.value + "%"};
  height: 100%;
  background: ${COLORS.primary};
  border-radius: var(--border-radius);
`;

export default ProgressBar;
