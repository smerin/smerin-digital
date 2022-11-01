import styled from "styled-components";
import Container from "./Container";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>&copy; Smerin Digital Limited 2022</p>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.greyDark};
  color: white;
  padding: 4rem 0;
`;

export default Footer;
