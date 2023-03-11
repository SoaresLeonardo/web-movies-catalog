import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
