import React, { useState, useCallback } from 'react';
import './select.css';

interface Props {
  selectedValue: string;
  setSelectedValue: (_: string) => void;
  optionsList: string[];
}
export const Select = ({ selectedValue, setSelectedValue, optionsList }: Props) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [dropdownHovered, setDropdownHovered] = useState<boolean>(false);

  const handleClick = useCallback((option: string) => {
    setSelectedValue(option);
    setOpenDropdown(false);
  }, [setSelectedValue]);
  
  const handleBlur = () => {
    if(!dropdownHovered) {
      setOpenDropdown(false);
    }
  }

  return (
    <div className="nn-widget__select-wrapper">
       <input
        className="nn-widget__form--input"
        value={selectedValue} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedValue(e.target.value)}
        onFocus={() => setOpenDropdown(true)}
        onBlur={handleBlur}
        />
        <div className="nn-widget__dropdown-wrapper">
          <ul 
            className={`nn-widget__select-dropdown ${openDropdown ? 'nn-widget__select-dropdown--open' : ""}`}
          >
            {optionsList.map((option) => 
            <li 
              key={option}
              onClick={() => handleClick(option)}
              onMouseOver={() => setDropdownHovered(true)}
              onMouseOut={() => setDropdownHovered(false)}
            >
              {option}
            </li>)}
          </ul>
        </div>
       <label className="nn-widget__form--label">Jaki framework wybierzesz? </label>
    </div>
  )
}
