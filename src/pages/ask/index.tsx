import { useCallback, useState, useEffect } from 'react';
import InputText from '../../components/input/InputText';
import InputLongText from '../../components/input/InputLongText';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import InputFile from '../../components/input/InputFile';

interface Input {
  orgName: string;
  name: string;
  phoneNumber: string;
  title: string;
  content: string;
}

interface inputComp {
  title: string;
  isEssential: boolean;
  placeholder: string;
  width: string;
  keyName: string;
}

const inputCompData: inputComp[] = [
  {
    title: '단체/기업명',
    isEssential: true,
    placeholder: '단체 / 기업명을 작성해 주세요.',
    width: '467px',
    keyName: 'orgName',
  },
  {
    title: '성함',
    isEssential: true,
    placeholder: '성함을 입력하세요',
    width: '467px',
    keyName: 'name',
  },
  {
    title: '연락처',
    isEssential: true,
    placeholder: '연락처를 입력하세요',
    width: '467px',
    keyName: 'phoneNumber',
  },
  {
    title: '제목',
    isEssential: true,
    placeholder: '제목을 입력하세요',
    width: '100%',
    keyName: 'title',
  },
];

const Ask = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState<Input>(); // 입력받은 데이터를 저장하는 객체
  const [inputFile, setInputFile] = useState<File>(); // 파일 입력을 따로 저장하기 위한 state
  const [isAgree, setIsAgree] = useState<boolean>(false); // 개인정보 동의 여부를 체크하는 state

  const isOkToSubmit = useCallback((): boolean => {
    // 필수 입력 정보가 모두 입력되었는지 확인
    if (
      inputData?.orgName &&
      inputData?.name &&
      inputData?.phoneNumber &&
      inputData?.title &&
      inputData?.content &&
      isAgree
    )
      return true;
    return false;
  }, [inputData, isAgree]);

  const onClickFAQButton = useCallback(() => {
    navigate('/notice');
  }, []);

  const onClickAgree = useCallback(() => {
    setIsAgree((prev: boolean) => !prev);
  }, [isAgree]);

  const handleSubmit = () => {
    if (isOkToSubmit()) {
      // 서버에 전송
      // API 연결이 안 되어 있어서 일단 입력 데이터 삭제하는 걸로
      setInputData(undefined);
      setInputFile(undefined);
      setIsAgree(false);
    } else {
      if (!isAgree) {
        window.alert('개인정보 수집에 동의해 주세요.');
      } else {
        window.alert('입력되지 않은 필수 정보가 있습니다.');
        scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <TopBox>
        <Title>
          <pre>{'문의하기'}</pre>
        </Title>
        <DescriptionContainer>
          <Description>{`질문 사항에 관한 설명을 적어주세요\n자주하는 질문 작성 부분`}</Description>
          <Button onClick={onClickFAQButton} style={{ marginRight: '60px' }}>
            <pre>FAQ 바로가기</pre>
          </Button>
        </DescriptionContainer>
      </TopBox>
      <InputContainer>
        {inputCompData.map((props) => (
          <InputText
            {...props}
            key={props.keyName}
            inputData={inputData}
            setInputData={setInputData}
          />
        ))}

        <InputLongText
          title={'내용'}
          isEssential={true}
          placeholder={'내용을 입력하세요.'}
          keyName={'content'}
          maxByte={3900}
          inputData={inputData}
          setInputData={setInputData}
        />

        <InputFile
          title={'파일'}
          placeholder={'파일을 업로드 하세요.'}
          width={'100%'}
          isEssential={false}
          inputFile={inputFile}
          setInputFile={setInputFile}
          maxSize={3}
        />

        <PrivacyContainer>
          <PrivacyTextContainer>
            <PrivacyTitle>
              <pre>{`개인정보 수집 이용에 대한 안내(필수 수집, 이용항목)`}</pre>
            </PrivacyTitle>
            <PrivacySubTitle>
              <pre>{`문의주신 내용의 답변을 위하여 귀하의 개인정보를 수집합니다.개인정보 수집에 동의하신 분에 한하여 문의 접수가 가능합니다.\n수집하는 개인정보 항목: 단체/기업명, 성함, 연락처`}</pre>
            </PrivacySubTitle>
          </PrivacyTextContainer>

          <RadioContainer onClick={onClickAgree}>
            <RadioButton>{isAgree && <InnerCircle />}</RadioButton>
            <pre>동의합니다</pre>
          </RadioContainer>
        </PrivacyContainer>
      </InputContainer>
      <Button onClick={handleSubmit}>문의하기</Button>
    </Container>
  );
};

export default Ask;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 70%;
  margin: auto;
  padding: 106px 0 161px; //추가
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-bottom: 1px solid #d8d8d8;
`;

const Title = styled.div`
  align-self: flex-start;

  pre {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 86px; /* 238.889% */
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin: 59px 0 50px;
`;

const Description = styled.pre`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 244px;
  height: 60px;
  flex-shrink: 0;

  border-radius: 31px;
  border: 2px solid #64a1e4;
  background: #fff;

  cursor: pointer;

  pre {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 100% */
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  margin: 26px 0 102px;
  gap: 50px;
`;

const PrivacyContainer = styled.div`
  width: 100%;
  flex-shrink: 0;

  margin-top: 100px;

  border-radius: 20px;
  background: #d9d9d9;
`;

const PrivacyTextContainer = styled.div`
  width: 100%;
  padding: 60px 79px 47px 79px;
`;

const PrivacyTitle = styled.div`
  margin-bottom: 21px;
  pre {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 125% */
  }
`;

const PrivacySubTitle = styled.div`
  pre {
    color: #000;
    font-size: 16px;
    white-space: pre-wrap;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
  }
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 17px;

  padding: 0 79px;
  margin-bottom: 59px;
  pre {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
  }
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  flex-shrink: 0;

  cursor: pointer;

  border-radius: 50%;
  border: 1px solid #000;
`;

const InnerCircle = styled.div`
  width: 14px;
  height: 14px;
  flex-shrink: 0;

  border-radius: 50%;
  background: #5487bf;
`;
