import { styled } from 'styled-components';

const CheckBoxDiv = styled.div`
  width: 300px;
  background-color: #efefef;
  border-radius: 20px;
  padding: 20px;
  div {
    margin: 20px;
  }
`;
const Form = styled.form``; //클릭시 이벤트 추가예종

const CheckBoxEach = styled.div``;

const CheckBox = () => {
  return (
    <CheckBoxDiv>
      <div> 필터</div>
      <div> 직군/직무 </div>
      <Form>
        <CheckBoxEach>
          <input type="checkbox" id="chk1" />
          <label htmlFor="chk1">HR</label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input type="checkbox" id="chk2" />
          <label htmlFor="chk2">마케팅/홍보</label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input type="checkbox" id="chk3" />
          <label htmlFor="chk3">회계</label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input type="checkbox" id="chk4" />
          <label htmlFor="chk4">IT</label>
        </CheckBoxEach>
      </Form>
    </CheckBoxDiv>
  );
};

export default CheckBox;
