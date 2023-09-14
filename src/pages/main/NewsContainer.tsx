import styled from 'styled-components';

const NewsTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 100px 0;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NewsContainer = () => {
  return (
    <>
      <NewsTitle>NEWS</NewsTitle>
      <FlexContainer></FlexContainer>
    </>
  );
};

export default NewsContainer;
