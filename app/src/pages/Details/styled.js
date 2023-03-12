import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  max-width: 1400px;
  justify-content: space-around;
  padding: 20px;
`;
export const DetailsIntro = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;

  p, span {
    padding-bottom: 20px;
  }
`;
export const Title = styled.h1`
  margin: 3rem 0;
`;
export const Description = styled.p``;
export const ReleaseDate = styled.span``;
export const DetailsImage = styled.div`
  width: 25%;
  img {
    width: 100%;
  }
`;

export const Duration = styled.span``;

export const ExitButton = styled.button`
  width: 150px;
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  background-color: #c59208;
  border: none;
  color: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
