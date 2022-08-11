import styled from "styled-components";

import Search from "../imagens/search.svg";

const StyledSection = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSectionInput = styled.input`
  width: 500px;
  height: 35px;

  border-radius: 50px;
  border: 0px;

  background: rgba(81, 0, 101, 0.22);
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: 450px;
  background-size: 25px;
  padding-left: 20px;
  cursor: pointer;
`;

const StyledCardSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 55.3vh;
`;

const StyledCardImg = styled.img`
  width: 150px;
  margin-bottom: -15px;
`;

const StyledCardSubtitle = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 15px;
  text-align: center;
  color: white;
  background: #510065;
`;

export {
  StyledSection,
  StyledSectionInput,
  StyledCardSection,
  StyledCardSubtitle,
  StyledCardImg,
};
