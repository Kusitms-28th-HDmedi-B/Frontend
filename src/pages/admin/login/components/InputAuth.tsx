import React from 'react';
import styled from 'styled-components';

export interface Auth {
  [key: string]: any;
  id: string;
  password: string;
}

type setStateType = React.Dispatch<React.SetStateAction<Auth>>;

interface Props {
  title: string;
  keyName: string;
  placeholder: string;
  inputState: Auth;
  setInputState: setStateType;
}

const InputAuth: React.FC<Props> = ({
  title,
  keyName,
  placeholder,
  inputState,
  setInputState,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState((prev: Auth) => ({ ...prev, [keyName]: e.target.value }));
  };

  return (
    <Container>
      <InputTitle>
        <pre>{title}</pre>
      </InputTitle>
      <Input
        onChange={onChange}
        value={inputState?.[keyName] || ''}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default InputAuth;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  gap: 15px;
`;

const InputTitle = styled.div`
  margin-top: 10px;
  pre {
    font-size: 24px;
    font-weight: 600;
  }
`;

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input<InputProps>`
  width: 100%;
  padding: 15px 0;

  border-radius: 30px;
  border: none;
  outline: 2px solid #575757;
  background: rgba(217, 217, 217, 0);

  text-indent: 5%;

  font-size: 16px;
  font-weight: 600;

  &::placeholder {
    color: #d9d9d9;
  }
  &::-webkit-input-placeholder {
    color: #d9d9d9;
  }
  &:-ms-input-placeholder {
    color: #d9d9d9;
  }
`;
