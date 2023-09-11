import { styled } from 'styled-components';
import logo from '../../../public/assets/logo/header-logo.svg';
import { CategoryData } from './data/FooterData';
import { useState } from 'react';
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
    display: inline;
    margin: 0 30px;
    text-align: center;
    line-height: 28px; //이거다
    color: #8b8b8b;
    &:hover {
      font-weight: 700;
      color: #31313e;
    }
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
          <li key={index}>{category.title}</li>
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
