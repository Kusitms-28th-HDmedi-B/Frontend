import styled from 'styled-components';
import { CategoryData } from './data/FooterData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import hamburgerBar from '/assets/image/header/hamburger.svg';
import { Logo } from './Header';

// 모바일
const MobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: inline;
    width: 100vw;
    height: auto;
    /* background-color: red; */
  }
  ul {
    /* width: 0px; */
    height: 0px;
    overflow: hidden;
    transition: height 0.5s ease-in-out;

    font-size: 18px;
    font-weight: 600;
    li {
      margin: 15px;
      padding: 5px 0;
    }
  }
  ul.toggleOn {
    height: 500px;
  }
`;
const MobileHeader = styled.div`
  @media screen and (max-width: 500px) {
    width: 100%;
    /* height: 50px; */
    margin: 0;
    padding: 0;
  }
`;
const HamburgerBar = styled.span`
  @media screen and (max-width: 500px) {
    display: inline-block;

    width: 30px;
    height: 23px;
    margin: 15px 15px 25px 15px;

    float: right;

    background: url(${hamburgerBar}) no-repeat;
    background-size: cover;

    cursor: pointer;
  }
`;
const HamburgerDepthContainer = styled.ul`
  @media screen and (max-width: 500px) {
    display: inline-block;

    width: 30px;
    height: 23px;

    cursor: pointer;
    li {
      background-color: red;
      width: 30px;
      height: 23px;
    }
  }
`;

const HeaderMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <MobileContainer>
      <MobileHeader>
        <Link to={'../'}>
          <Logo></Logo>
        </Link>
        <HamburgerBar onClick={() => setToggle((curr) => !curr)}></HamburgerBar>
        <ul className={toggle ? 'toggleOn' : 'toggleOff'}>
          {CategoryData.map((category) => {
            return (
              <>
                <li>{category.title}</li>

                <HamburgerDepthContainer>
                  {category.depth.map((each, index) => (
                    <li key={index}>
                      <Link to={each.url}>{each.name}</Link>
                    </li>
                  ))}
                </HamburgerDepthContainer>
              </>
            );
          })}
        </ul>
      </MobileHeader>
    </MobileContainer>
  );
};
export default HeaderMobile;
