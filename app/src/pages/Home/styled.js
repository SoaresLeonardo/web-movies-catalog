import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1``;
export const TitleContainer = styled.div`
 margin: 20px 0 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
`;

export const CardContainer = styled.div`
  background-color: #151515;
  border: 1px solid #1c1c1e;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 16px 16px 0;
  align-items: center;
  transition: 0.2s;

  &:hover {
    transform:scale(1.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  margin: 0 0 16px;
  text-align: center;
`;
