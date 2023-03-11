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
`;
export const HeaderLinks = styled.nav`
  display: flex;
  gap: 30px;
  @media (max-width: 560px) {
    flex-direction: column;
    color: white;
    background-color: #6e57e0;
    position: fixed;
    height: 60%;
    gap: 0px;
    top: 0;
    right: 0px;
    width: 60%;
    height: 100vh;
    right: ${(props) => (props.sidebar ? "0" : "-100%")};
    transition: 0.3s;
    a {
      margin-top: 80px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: white;
    }
  }
`;
export const Menu = styled.div`
  font-size: 20px;
  display: none;
  cursor: pointer;
  color: white;
  @media (max-width: 560px) {
    display: flex;
  }
`;
export const Link = styled.div``;
export const SearchMovieContainer = styled.div`
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
  }
`;
export const InputSearch = styled.div``;
