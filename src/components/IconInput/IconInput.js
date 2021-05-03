import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: "14px",
    lineHeight: "16px",
    borderBottom: `1px solid ${COLORS.black}`,
  },
  large: {
    fontSize: "18px",
    lineHeight: "21px",
    borderBottom: `2px solid ${COLORS.black}`,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  console.log(size);
  return (
    <Container>
      <IconWrapper
        id={icon}
        size={size === "small" ? "10.67" : "16"}
        style={{ "--borderBottom": styles.borderBottom }}
      />
      <Wrapper
        type="text"
        name={label}
        id={label}
        style={{ ...styles, width: `${width}px` }}
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const IconWrapper = styled(Icon)`
  border-bottom: var(--borderBottom);
  padding-top: 3px;
  padding-right: 5px;
`;

const Wrapper = styled.input`
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  width: var(--width);
  color: ${COLORS.gray700};
  font-weight: bold;
  border: none;
  border-bottom: var(--borderBottom);

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 20px;
    border-radius: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
