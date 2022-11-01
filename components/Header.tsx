import styled from "styled-components";
import Container from "./Container";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Heading>George Smerin</Heading>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${(props) => props.theme.turquoise};
  padding: 4rem 0;
`;

const Heading = styled.h1`
  font-size: 6rem;
  color: white;
`;

export default Header;
