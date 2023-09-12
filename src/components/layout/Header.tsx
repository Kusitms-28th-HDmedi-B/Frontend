import { styled } from 'styled-components';
import logo from '../../../public/assets/logo/header-logo.svg';
import { CategoryData } from './data/FooterData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { HeaderColorType, currHeaderAtom } from '../../recoil/atom';
const Container = styled.div<{ bgColor: HeaderColorType }>`
  /* border: 1px solid black; */
  width: 70%;
  height: 80px;
  margin: 0 15%;
  padding: 15px 0;
  background-color: ${(props) => props.bgColor};
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
`;
const NavLi = styled.li<{ countDepth: number }>`
  position: relative;
  display: inline;
  padding: 0px 30px 15px 30px;
  /* margin: 0 30px;
  padding-bottom: 15px; //호버시 마우스를 내려올 수 있게 하기 위한 영역 */
  text-align: center;
  line-height: 28px; //이거다
  color: #8b8b8b;
  &:hover {
    font-weight: 700;
    color: #31313e;
  }
  &:hover > div {
    height: ${(props) => props.countDepth * 34 + 3}px;
    border: 1px solid #d0d0d0;
  }
`;
const NavDepthContainer = styled.div`
  display: flex; /* 부모 li에 호버 시 나타남 */
  flex-direction: column;
  height: 0px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  position: absolute;
  width: max-content;

  top: 100%; //이게 왜 중요하지?
  /* left: 0; //부모의 li가 relative이므로, 그것의 x값 */
  left: 50%; /* 요소의 가로 중앙으로 이동 */
  transform: translateX(-50%); /* 왼쪽으로 절반만큼 이동 */
  border-radius: 9px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
  font-size: 14px;
`;
const NavDepth = styled.div`
  padding: 3px 10px;
  color: #b4b4b4;
  &:hover {
    color: #31313e;
  }
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
  const currHeader = useRecoilValue(currHeaderAtom);
  return (
    <Container bgColor={currHeader}>
      <Link to={'../'}>
        <Logo></Logo>
      </Link>
      <Nav>
        {categories.map((category, index) => (
          <NavLi key={index} countDepth={category.depth.length}>
            {category.title}
            <NavDepthContainer>
              {category.depth.map((each, index) => (
                <NavDepth key={index}>
                  <Link to={each.url}>{each.name}</Link>
                </NavDepth>
              ))}
            </NavDepthContainer>
          </NavLi>
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
