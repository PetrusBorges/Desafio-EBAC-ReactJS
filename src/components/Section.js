import {
  StyledSection,
  StyledSectionInput,
  StyledCardSection,
  StyledCardImg,
  StyledCardSubtitle,
} from "../styles/Section";

import CardFilm from "../imagens/image 2.svg";

export default function Section() {
  return (
    <>
      <StyledSection>
        <StyledSectionInput type="text" placeholder="PROCURE AQUI" />
      </StyledSection>
      <StyledCardSection>
        <div>
          <StyledCardImg src={CardFilm} alt="FilmeCard" />
          <StyledCardSubtitle>Nota: 5/5</StyledCardSubtitle>
        </div>
        <div>
          <StyledCardImg src={CardFilm} alt="FilmeCard" />
          <StyledCardSubtitle>Nota: 5/5</StyledCardSubtitle>
        </div>
        <div>
          <StyledCardImg src={CardFilm} alt="FilmeCard" />
          <StyledCardSubtitle>Nota: 5/5</StyledCardSubtitle>
        </div>
        <div>
          <StyledCardImg src={CardFilm} alt="FilmeCard" />
          <StyledCardSubtitle>Nota: 5/5</StyledCardSubtitle>
        </div>
      </StyledCardSection>
    </>
  );
}
