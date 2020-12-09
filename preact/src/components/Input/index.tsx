import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

interface Props {
  value: string;
  setValue: (_: string) => void;
}

const Input: FunctionalComponent<Props> = ({value, setValue}: Props) => {
  return (
    <div class={style.inputWrapper}>
      <input
        type="text"
        class={style.input}
        value={value}
        onChange={(e: any): void => setValue(e.target.value)}
      />
      <label class={style.label}>imię </label>
    </div>
  )
};

export default Input;