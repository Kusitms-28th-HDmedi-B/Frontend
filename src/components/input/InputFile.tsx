import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

import CloseIcon from '../../assets/icon/close.svg'; // X버튼 이미지

type setStateType = React.Dispatch<React.SetStateAction<File | undefined>>;

interface Props {
  title: string; // 입력의 제목
  isEssential: boolean; // 필수 여부
  placeholder: string; // placeholder
  width: string; // input 창의 너비
  inputFile: File | undefined;
  setInputFile: setStateType;
  maxSize: number; // 파일 최대 크기
}

const InputFile: React.FC<Props> = ({
  title,
  isEssential,
  placeholder,
  width,
  inputFile,
  setInputFile,
  maxSize,
}) => {
  const inputRef = useRef<any>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files !== null) {
        const file: File = e.target.files[0];
        if (file.size >= maxSize * 1024 * 1024) {
          window.alert(`파일의 크기는 ${maxSize}MB로 제한됩니다.`);
        } else setInputFile(e.target.files[0]);
        e.target.value = '';
      }
    },
    [],
  );

  const handleClick = useCallback(() => {
    if (inputRef?.current) inputRef.current.click();
  }, []);

  const handleDelete = useCallback(() => {
    setInputFile(undefined);
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {isEssential && <IconWrapper></IconWrapper>}
      </TitleContainer>
      <StyledInput type="file" ref={inputRef} onChange={handleChange} />

      <FileInputContainer>
        <FileContainer width={width}>
          <FileName>{inputFile ? inputFile.name : placeholder}</FileName>
          {inputFile && (
            <CloseButton onClick={handleDelete}>
              <img src={CloseIcon} alt="delete" />
            </CloseButton>
          )}
          <UploadButtonWrapper>
            <UploadButton onClick={handleClick}>
              <pre>업로드</pre>
            </UploadButton>
          </UploadButtonWrapper>
        </FileContainer>
        <CaptionContainer>
          <pre>{`파일은 최대 ${maxSize}MB까지 가능합니다.`}</pre>
        </CaptionContainer>
      </FileInputContainer>
    </Container>
  );
};

export default InputFile;

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
  onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null;
}

const StyledInput = styled.input<InputProps>`
  display: none;
`;

interface FileContainerProps {
  width: string;
}

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  gap: 10px;

  position: relative;
`;

const FileContainer = styled.div<FileContainerProps>`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  position: relative;

  width: ${({ width }) => (width ? width : '476px')};
  height: 60px;
  background: #fff;

  border-radius: 15px;
  outline: 1px solid #a5a5a5;

  padding: 15px 0 15px 30px;
`;

const FileName = styled.pre`
  color: #b8b8b8;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 187.5% */
`;

const UploadButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const UploadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 218px;
  height: 60px;
  flex-shrink: 0;

  border-radius: 15px;
  background: #d9d9d9;

  cursor: pointer;

  pre {
    color: #616161;
    text-align: center;
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 187.5% */
  }
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  flex-shrink: 0;

  margin-left: 10px;

  border-radius: 50%;
  background-color: #c2c2c2;

  cursor: pointer;

  img {
    width: 10.803px;
    height: 10.91px;
    flex-shrink: 0;
  }
`;

const CaptionContainer = styled.div`
  position: absolute;

  bottom: -40px;

  pre {
    color: #b8b8b8;
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
  }
`;
