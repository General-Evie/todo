import React, { useState } from 'react';

interface CustomCheckBoxProps {
  isChecked: boolean;
}

const CustomCheckbox: React.FC<CustomCheckBoxProps> = ({ isChecked }) => {


  return (
    <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
      {isChecked && <span>✓</span>}
    </div>
  );
};

export default CustomCheckbox;