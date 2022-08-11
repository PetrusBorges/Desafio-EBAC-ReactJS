import { StyledHeader, StyledHeaderContent } from "../styles/Header";

export default function HeaderFooter(props) {
  return (
    <StyledHeader>
      <StyledHeaderContent>{props.content}</StyledHeaderContent>
    </StyledHeader>
  );
}
