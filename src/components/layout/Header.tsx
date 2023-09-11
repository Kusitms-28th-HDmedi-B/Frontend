import { styled } from 'styled-components';
import logo from '../../../public/assets/logo/header-logo.svg';
import { CategoryData } from './data/FooterData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  margin-left: 100px;
  display: inline-block;
  position: absolute;

  li {
    position: relative;
    display: inline;
    margin: 0 30px;
    padding-bottom: 20px; //호버시 마우스를 내려올 수 있게 하기 위한 영역
    text-align: center;
    line-height: 28px; //이거다
    color: #8b8b8b;
    &:hover {
      font-weight: 700;
      color: #31313e;
    }
  }
  li:hover > div {
    display: flex; /* 부모 li에 호버 시 나타남 */
    flex-direction: column;
  }
`;
const NavDepthContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%; //이게 왜 중요하지?
  /* left: 0; //부모의 li가 relative이므로, 그것의 x값 */
  left: 50%; /* 요소의 가로 중앙으로 이동 */
  transform: translateX(-50%); /* 왼쪽으로 절반만큼 이동 */
  border: 1px solid #d0d0d0;
  border-radius: 9px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
  font-size: 14px;
`;
const NavDepth = styled.div`
  width: max-content;
  padding: 3px 10px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const LanguageContainer = styled.span`
  float: right;
  line-height: 28px; //이거다
`;
const Language = styled.span<{ isSelected: boolean }>`
  cursor: pointer;
  padding: 0 10px;
  color: ${(props) => (props.isSelected ? 'inherit' : '#b4b4b4')};
`;
type LanguageType = 'KR' | 'EN';
function Header() {
  const categories = CategoryData;
  const [currLanguage, setCurrLanguage] = useState<LanguageType>('KR');
  console.log('rende');
  return (
    <Container>
      <Logo></Logo>
      <Nav>
        {categories.map((category, index) => (
          <li key={index}>
            {category.title}
            <NavDepthContainer>
              {category.depth.map((each, index) => (
                <NavDepth key={index}>
                  <Link to={each.url}>{each.name}</Link>
                </NavDepth>
              ))}
            </NavDepthContainer>
          </li>
        ))}
      </Nav>
      <LanguageContainer>
        <Language
          isSelected={currLanguage === 'KR'}
          onClick={() => setCurrLanguage('KR')}
        >
          KR
        </Language>
        |
        <Language
          isSelected={currLanguage === 'EN'}
          onClick={() => setCurrLanguage('EN')}
        >
          EN
        </Language>
      </LanguageContainer>
    </Container>
  );
}

export default Header;
