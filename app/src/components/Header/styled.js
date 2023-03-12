import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-bottom: 1px solid #1c1c1e;
`;
export const Content = styled.div`
  display: flex;
  width: 1120px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 1.4rem;

  &:hover {
    color: #c59208;
  }
`;

export const SearchMovieContainer = styled.form`
  background-color: #151515;
  font-size: 1.3rem;
  padding: 14px;
  border-radius: 18px;
  display: flex;
  align-items: center;

  input {
    background-color: inherit;
    border: none;
    outline: none;
    color: white;
    font-size: 1rem;
    width: 100%;
  }
  @media (max-width: 540px) {
    width: 50%;
  }
`;
export const InputSearch = styled.div``;
export const IconSearch = styled.button`
  background-color: inherit;
  border: none;
  color: inherit;
  font-size: inherit;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: #c59208;
  }
`;
