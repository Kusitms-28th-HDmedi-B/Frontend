import { useState, useCallback } from 'react';
import styled from 'styled-components';

import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

type setPageType = React.Dispatch<React.SetStateAction<number>>;

interface Props {
  maxPage: number; // 최대 페이지 수
  page: number; // page state
  setPage: setPageType; // page state를 설정하는 함수
}

const PageBar: React.FC<Props> = ({ maxPage, page, setPage }) => {
  const [nowPages, setNowPages] = useState<number[]>(
    maxPage >= 3
      ? [1, 2, 3]
      : Array(maxPage)
          .fill(0)
          .map((_, index) => index + 1),
  );

  const onClickNumber = (num: number): void => {
    setPage(num);
  };

  const onClickLeft = useCallback(() => {
    if (page === 1) return;
    else if (page % 3 !== 1) setPage((prev) => prev - 1);
    else if (page % 3 === 1) {
      setNowPages((prev) => prev.map((num: number) => num - 3));
      setPage((prev) => prev - 1);
    }
  }, [page, nowPages]);

  const onClickRight = useCallback(() => {
    if (maxPage === page) return;
    else if (page % 3 !== 0) setPage((prev) => prev + 1);
    else if (page % 3 === 0 && page < maxPage) {
      setNowPages((prev) => prev.map((num: number) => num + 3));
      setPage((prev) => prev + 1);
    }
  }, [page, nowPages]);

  return (
    <Container>
      <img
        src={ArrowLeft}
        alt="arrow-left"
        onClick={onClickLeft}
        style={{ cursor: 'pointer' }}
      />
      {nowPages.map((num) => {
        if (num > maxPage) return;
        return (
          <PageNumber
            selected={page === num}
            onClick={() => onClickNumber(num)}
          >
            <pre>{num}</pre>
          </PageNumber>
        );
      })}
      <img
        src={ArrowRight}
        alt="arrow-right"
        onClick={onClickRight}
        style={{ cursor: 'pointer' }}
      />
    </Container>
  );
};

export default PageBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 101px;
`;

interface PageNumberProps {
  selected: boolean;
}

const PageNumber = styled.div<PageNumberProps>`
  cursor: pointer;

  pre {
    color: ${({ selected }) => (selected ? '#000' : '#B9B9B9')};
    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: ${({ selected }) => (selected ? 'bold' : '500')};
    line-height: 14px; /* 77.778% */
  }
`;
