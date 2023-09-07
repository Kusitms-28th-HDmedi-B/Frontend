import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

type setStateType = React.Dispatch<React.SetStateAction<any>>;

interface Props {
  title: string; // 입력의 제목
  isEssential: boolean; // 필수 여부
  placeholder: string; // placeholder
  keyName: string; // 데이터 저장시의 key이름
  inputData: any; // inputData state
  maxByte: number;
  setInputData: setStateType;
}

const InputLongText: React.FC<Props> = ({
  title,
  isEssential,
  placeholder,
  keyName,
  inputData,
  maxByte,
  setInputData,
}) => {
  const [dataByte, setDataByte] = useState<number>(0);

  const getByte = useCallback((str: string): number => {
    return str
      .split('')
      .map((s) => s.charCodeAt(0))
      .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);
  }, []);

  const isFull = useCallback(() => (dataByte >= maxByte ? true : false), []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>): void => {
      const {
        target: { value },
      } = e;
      const byteLength: number = getByte(value);

      if (byteLength > maxByte) return;
      setDataByte(byteLength);
      setInputData((prev: any) => ({ ...prev, [keyName]: value }));
    },
    [],
  );

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e?.key === 'Backspace' && isFull()) {
        const prevData = inputData?.[keyName];
        setInputData((prev: any) => ({
          ...prev,
          [keyName]: prevData?.slice(0, -1),
        }));
        setDataByte(getByte(inputData?.[keyName]));
      }
    },
    [],
  );

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {isEssential && <IconWrapper></IconWrapper>}
      </TitleContainer>
      <InputContainer>
        <StyledInput
          placeholder={placeholder}
          value={inputData?.[keyName] || ''}
          onChange={handleChange}
          readOnly={isFull()}
          onKeyUp={handleKeyUp}
        />
        <ByteCaption>{`${dataByte} / ${maxByte}byte (한글 1300자, 영어 4000자)`}</ByteCaption>
      </InputContainer>
    </Container>
  );
};

export default InputLongText;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 95px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 30px;

  width: 94px;
  height: 30px;
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

  background: #d9d9d9;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

interface InputProps {
  onChange: ((e: React.ChangeEvent<HTMLSelectElement>) => void) | null;
  onKeyUp: ((e: React.KeyboardEvent<HTMLInputElement>) => void) | null;
}

const StyledInput = styled.textarea<InputProps>`
  width: 1092px;
  height: 341px;

  border-radius: 15px;
  box-sizing: border-box;
  outline: 1px solid #a5a5a5;
  border: none;

  resize: none;

  /* Font */
  font-family: Pretendard;
  color: #000;
  padding: 15px 30px;
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

const ByteCaption = styled.pre`
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b8b8b8;
  line-height: 30px; /* 187.5% */
`;
