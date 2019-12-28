import styled from "styled-components";

const LabelWrapper = styled.a`
  color: ${({ theme }) => theme.colorText};
  margin-right: 20px;
  font-size: 16px;
  font-weight: 800;
  font-family: monospace;
  cursor: pointer;
`;

export { LabelWrapper };
