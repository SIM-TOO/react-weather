import React from "react";
import { useNavigate } from "react-router-dom";
import { SelectWrapper } from "./styles";

import CreatableSelect from "react-select/creatable";
import { CityOption, cityOptions } from "./data";
import { ActionMeta, OnChangeValue } from "react-select";

const CitySelect: React.FC = () => {
  const navigate = useNavigate();

  const handleChange = (
    newValue: OnChangeValue<CityOption, false>,
    actionMeta: ActionMeta<CityOption>
  ) => {
    // value값이 null, undefined 경우 코드 실행을 중단 하기 위해서 옵셔널 체이닝(Optional Chaining) 연산자 사용 
    navigate(`/${newValue?.value}`);
  };

  return (
    <SelectWrapper>
      {/* react-select 사용 */}
      <CreatableSelect
        onChange={handleChange}
        options={cityOptions}
        defaultValue={null}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectWrapper>
  );
};

export default CitySelect;
