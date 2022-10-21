import styled from "styled-components";
import Container from "./Container";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>George Smerin</Heading>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: ${(props) => props.theme.turquoise};
  padding: 4rem 0;
`;

const Heading = styled.h1`
  font-size: 6rem;
  color: white;
`;

export default Header;
