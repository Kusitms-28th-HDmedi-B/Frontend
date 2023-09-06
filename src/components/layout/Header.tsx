import { styled } from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
`;

const Logo = styled.div`
  display: inline-block;
`;
const Nav = styled.li`
  display: inline-block;
`;
const Language = styled.div`
  display: inline-block;
`;
function Header() {
  return (
    <Container>
      <Logo>[로고]</Logo>
      <Nav>[네비게이션 바]</Nav>
      <Language> [토글]</Language>
    </Container>
  );
}

export default Header;
