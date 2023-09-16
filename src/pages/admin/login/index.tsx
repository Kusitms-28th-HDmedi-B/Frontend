import { useState } from 'react';
import styled from 'styled-components';
import MainLogo from '/assets/logo/logo.png';
import InputAuth, { Auth } from './components/InputAuth';
import { getAuthToken } from '../../../apis/login';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState<Auth>({ id: '', password: '' });

  const login = async () => {
    try {
      const res = await getAuthToken(inputData?.id, inputData?.password);
      if (res.status === 200) {
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = () => {
    login();
  };

  return (
    <Body>
      <Container>
        <InnerContainer>
          {/* 상단 로고 */}
          <Logo src={MainLogo} alt="logo" />

          {/* 로그인하는 부분 */}
          <LoginContainer>
            <InputAuth
              title={'아이디'}
              keyName="id"
              placeholder="아이디를 입력해 주세요."
              inputState={inputData}
              setInputState={setInputData}
            />
            <InputAuth
              title={'비밀번호'}
              keyName="password"
              placeholder="비밀번호를 입력해 주세요."
              inputState={inputData}
              setInputState={setInputData}
            />
          </LoginContainer>

          <LoginButton onClick={onSubmit}>
            <pre>로그인 하기</pre>
          </LoginButton>

          {/* 로그인 상태 유지 및 계정 찾기 */}
          <UnderBox>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CheckBox type="checkbox" />
              <pre style={{ fontSize: '16px', marginLeft: '5px' }}>
                {'로그인 상태 유지하기'}
              </pre>
            </div>
            <Link to="/admin/find" style={{ textDecoration: 'none' }}>
              <pre style={{ fontSize: '16px', color: '#616161' }}>
                {'아이디 비밀번호 찾기'}
              </pre>
            </Link>
          </UnderBox>
        </InnerContainer>
      </Container>
    </Body>
  );
};

export default Login;

const Body = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 560px;
  height: 783px;
  flex-shrink: 0;

  border-radius: 93px;
  border: 3px solid #616161;
  background: rgba(217, 217, 217, 0);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 240.683px;
  height: 241.467px;
  flex-shrink: 0;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 75.8px 94px 91px;

  gap: 50px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 211px;
  height: 55px;
  flex-shrink: 0;

  border-radius: 30px;
  border: 2px solid rgba(87, 87, 87, 0);
  background: #2a5ba9;

  cursor: pointer;

  pre {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
`;

const UnderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  flex-shrink: 0;

  border: 2px solid #575757;
  background: rgba(217, 217, 217, 0);
`;
