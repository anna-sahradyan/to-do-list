import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`;

export const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  margin-bottom: 25px;
  color: wheat;

  & b {
    color: #267cb5;
    font-weight: 800;
    font-size: 25px;
  }
`;
