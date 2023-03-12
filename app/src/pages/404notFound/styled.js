import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;
export const Title = styled.h1``;
export const CodeProject = styled.div``;
export const Description = styled.p`
  color: grey;
`;
export const LinkIcon = styled.a`
  font-size: 2.5rem;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const NumberCode = styled.h1`
  font-size: 6rem;
`;
