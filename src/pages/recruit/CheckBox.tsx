import { styled } from 'styled-components';
import checkBox from './checkbox.svg';
import checkBoxFill from './checkbox-fill.svg';

const CheckBoxDiv = styled.div`
  /* float: left; */
  /* width: 30%; */
  width: 20%;
  height: 25%;
  background-color: #efefef;
  border-radius: 20px;
  font-size: 16px;
  margin-right: 20px;
  :first-child {
    font-weight: 600;
  }
  div {
    margin: 15px 20px;
  }
  form div {
    margin: 20px 20px;
  }
`;
const Form = styled.form``; //클릭시 이벤트 추가예종

const CheckBoxEach = styled.div`
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + label span {
    display: inline-block;
    position: relative;
    width: 15px;
    height: 15px;
    margin: -2px 30px 0 0; // 글자의 스타일
    vertical-align: middle;
    background: url(${checkBox}) left top no-repeat;
    cursor: pointer;
    background-size: cover;
  }

  input[type='checkbox']:checked + label span {
    background: url(${checkBoxFill}) top no-repeat;
    background-size: cover;
  }
`;

const CheckBox = () => {
  return (
    <CheckBoxDiv>
      <div> 필터</div>
      <div> 직군/직무 </div>
      <Form>
        <CheckBoxEach>
          <input type="checkbox" id="chk1" />
          <label htmlFor="chk1">
            <span></span>HR
          </label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input type="checkbox" id="chk2" />
          <label htmlFor="chk2">
            <span></span>마케팅/홍보
          </label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input type="checkbox" id="chk3" />
          <label htmlFor="chk3">
            <span></span>회계
          </label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input type="checkbox" id="chk4" />
          <label htmlFor="chk4">
            <span></span>IT
          </label>
        </CheckBoxEach>
      </Form>
    </CheckBoxDiv>
  );
};

export default CheckBox;
