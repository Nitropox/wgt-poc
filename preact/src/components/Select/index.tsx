import { FunctionalComponent, h } from "preact";
import { useCallback, useState } from "preact/hooks";
import * as style from "./style.css";

interface Props {
  selectedValue: string;
  setSelectedValue: (_: string) => void;
  optionsList: string[];
}

const Select: FunctionalComponent<Props> = ({selectedValue, setSelectedValue, optionsList}: Props) => {
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
    <div class={style.selectWrapper}>
       <input
        class={style.select}
        value={selectedValue} 
        onChange={(e: any) => setSelectedValue(e.target.value)}
        onFocus={() => setOpenDropdown(true)}
        onBlur={handleBlur}
        />
        <div class={style.dropdownWrapper}>
          <ul 
            className={`${style.selectDropdown} ${openDropdown ? style.dropdownOpen : ""}`}
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
       <label class={style.label}>Jaki framework wybierzesz? </label>
    </div>
  )
};

export default Select;

