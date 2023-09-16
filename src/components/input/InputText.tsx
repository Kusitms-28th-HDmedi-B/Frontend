import React, { useCallback } from 'react';
import styled from 'styled-components';

type setStateType = React.Dispatch<React.SetStateAction<any>>;

interface Props {
  title: string; // 입력의 제목
  isEssential: boolean; // 필수 여부
  placeholder: string; // placeholder
  width: string; // input 창의 너비
  keyName: string; // 데이터 저장시의 key이름
  inputData: any; // inputData state
  setInputData: setStateType;
}

const InputText: React.FC<Props> = ({
  title,
  isEssential,
  placeholder,
  width,
  keyName,
  inputData,
  setInputData,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>): void => {
      setInputData((prev: any) => ({ ...prev, [keyName]: e.target.value }));
    },
    [],
  );

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {isEssential && <IconWrapper></IconWrapper>}
      </TitleContainer>
      <StyledInput
        type="text"
        value={inputData?.[keyName] || ''}
        width={width}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  );
};

export default InputText;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  gap: 95px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-shrink: 0;

  width: 120px;
  height: 30px;

  gap: 5px;
`;

const Title = styled.pre`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
`;

const IconWrapper = styled.div`
  width: 8px;
  height: 8px;
  flex-shrink: 0;

  /* background: #d9d9d9; */
  background: red;
  border-radius: 50%;
`;

interface InputProps {
  onChange: ((e: React.ChangeEvent<HTMLSelectElement>) => void) | null;
}

const StyledInput = styled.input<InputProps>`
  width: ${({ width }) => (width ? width : '467px')};
  height: 60px;

  border-radius: 15px;
  box-sizing: border-box;
  outline: 1px solid #a5a5a5;
  border: none;

  text-indent: 30px;

  /* Font */
  font-family: Pretendard;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 30px; /* 187.5% */

  &::placeholder {
    color: #b8b8b8;
  }
  &::-webkit-input-placeholder {
    color: #b8b8b8;
  }
  &:-ms-input-placeholder {
    color: #b8b8b8;
  }
`;
