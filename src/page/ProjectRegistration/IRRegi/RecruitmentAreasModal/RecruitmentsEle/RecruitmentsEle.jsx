import React, { useState } from 'react';

const RecruitmentsEle = ({ ele, idx, handleSelectedList }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = e => {
    setIsChecked(!isChecked);
    handleSelectedList(e.target.value, isChecked);
  };
  return (
    <div
      className={`recuitment_modal_elements recuitment_modal_elements_${idx}`}
      key={idx}
    >
      <input
        type="checkbox"
        key={`${ele}_${idx}`}
        name={`${ele}`}
        value={`${ele}`}
        checked={isChecked}
        onChange={e => {
          handleChecked(e);
        }}
      />
      <div key={`${idx}_${idx}`}>{ele}</div>
    </div>
  );
};

export default RecruitmentsEle;
