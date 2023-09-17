import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';

import checkBox from './checkbox.svg';
import checkBoxFill from './checkbox-fill.svg';
import { recruitCategoriesAtom } from '../../recoil/atom';

const CheckBoxDiv = styled.div`
  /* float: left; */
  /* width: 30%; */
  width: 20%;

  height: 80%;

  background-color: #efefef;
  border-radius: 20px;
  font-size: 16px; //22
  margin-right: 20px;
  :first-child {
    font-weight: 600;
    line-height: 24px;
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
  label {
    /* width: 1%; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + label span {
    display: inline-block;
    position: relative;
    width: 15px;
    height: 15px;
    margin: -2px 20% 0 0; // 글자의 스타일
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
  const [categories, setCategories] = useRecoilState(recruitCategoriesAtom);
  const categoryClicked = (idx: number, checked: boolean) => {
    setCategories((curr) => {
      // console.log(idx, checked, curr);
      const newCategories = [...curr];
      newCategories[idx] = checked;
      return newCategories;
    });
  };
  return (
    <CheckBoxDiv>
      <div> 필터</div>
      <div> 직군/직무 </div>
      <Form>
        <CheckBoxEach>
          <input
            type="checkbox"
            id="chk1"
            onChange={(event) =>
              categoryClicked(0, event.currentTarget.checked)
            }
            checked={categories[0]}
          />
          <label htmlFor="chk1">
            <span></span>HR
          </label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input
            type="checkbox"
            id="chk2"
            onChange={(event) =>
              categoryClicked(1, event.currentTarget.checked)
            }
            checked={categories[1]}
          />
          <label htmlFor="chk2">
            <span></span>마케팅/홍보
          </label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input
            type="checkbox"
            id="chk3"
            onChange={(event) =>
              categoryClicked(2, event.currentTarget.checked)
            }
            checked={categories[2]}
          />
          <label htmlFor="chk3">
            <span></span>회계
          </label>
        </CheckBoxEach>
        <CheckBoxEach>
          <input
            type="checkbox"
            id="chk4"
            onChange={(event) =>
              categoryClicked(3, event.currentTarget.checked)
            }
            checked={categories[3]}
          />
          <label htmlFor="chk4">
            <span></span>IT
          </label>
        </CheckBoxEach>
      </Form>
    </CheckBoxDiv>
  );
};

export default CheckBox;
