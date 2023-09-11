import { styled } from 'styled-components';
import logo from '../../../public/assets/logo/header-logo.svg';
const Container = styled.div`
  /* border: 1px solid black; */
  width: 70%;
  height: 80px;
  margin: 0 15%;
  padding: 15px 0;
  background-color: #fff;
  position: fixed;
  z-index: 3;
`;

const Logo = styled.span`
  display: inline-block;
  background-image: url(${logo});
  background-size: cover;
  width: 167px;
  height: 28px;
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
