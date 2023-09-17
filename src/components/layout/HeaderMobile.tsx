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
const HamburgerUl = styled.ul`
  @media screen and (max-width: 500px) {
    padding: 0 20px;
    height: 0px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    font-size: 18px;
    font-weight: 600;

    &.toggleOn {
      height: 100vh;
    }
    > li {
      &.clicked {
        text-decoration: underline;
      }
    }
    margin-top: 20px; //
  }
`;
const HamburgerDepthUl = styled.ul<{ $countDepth: number }>`
  @media screen and (max-width: 500px) {
    display: inline-block;

    width: 300px;
    height: 0px;
    margin: 15px 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    cursor: pointer;

    &.clicked {
      /* height: 50px; */
      height: ${(props) => props.$countDepth * 41}px;
    }

    li {
      color: #616161;
      font-size: 14px;
      font-weight: 600;
      width: 500px;
      height: 23px;
      margin: 10px 0;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

const HeaderMobile = () => {
  const [toggle, setToggle] = useState(false);
  const [isClicked, setisClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <MobileContainer>
      <MobileHeader>
        <Link to={'../'}>
          <Logo></Logo>
        </Link>
        <HamburgerBar onClick={() => setToggle((curr) => !curr)}></HamburgerBar>
      </MobileHeader>

      <HamburgerUl className={toggle ? 'toggleOn' : ''}>
        {CategoryData.map((category, index) => {
          return (
            <div key={index}>
              <li
                className={isClicked[index] ? 'clicked' : ''}
                onClick={() =>
                  setisClicked((curr) => {
                    const currState = curr[index];
                    let newClicked = [...curr];
                    newClicked[index] = !currState;
                    return newClicked;
                  })
                }
              >
                {category.title}
              </li>

              <HamburgerDepthUl
                className={isClicked[index] ? 'clicked' : ''}
                $countDepth={category.depth.length}
              >
                {category.depth.map((each, index) => (
                  <li onClick={() => setToggle(false)} key={index}>
                    <Link to={each.url}>{each.name} </Link>
                  </li>
                ))}
              </HamburgerDepthUl>
            </div>
          );
        })}
      </HamburgerUl>
    </MobileContainer>
  );
};
export default HeaderMobile;
