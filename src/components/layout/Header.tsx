import { styled } from 'styled-components';
import logoImg from '../../assets/logo.png';
const Container = styled.div`
  border: 1px solid black;
  height: 80px;
  padding: 0 10%;
`;

const Logo = styled.div`
  display: inline-block;
  border: 1px solid black;
  background-image: url(${logoImg});
  background-size: cover;
  width: 50px;
  height: 50px;
`;
const Nav = styled.ul`
  display: inline-block;
  position: absolute;
  li {
    display: inline;
    margin: 10px 30px;
  }
`;
const Language = styled.span`
  display: inline-block;
  position: absolute;
  left: 90%;
`;
function Header() {
  const categories = ['회사 소개', '서비스', '기술', '인재상', '컨택', '뉴스'];
  return (
    <Container>
      <Logo></Logo>
      <Nav>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </Nav>
      <Language> [토글]</Language>
    </Container>
  );
}

export default Header;
