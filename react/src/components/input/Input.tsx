import React from 'react';
import './input.css';

interface Props {
  value: string;
  setValue: (_: string) => void;
}
export const Input = ({ value, setValue }: Props) => {
  return (
    <div className="nn-widget__input-wrapper">
      <input
        type="text"
        className="nn-widget__form--input"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value)}
      />
      <label className="nn-widget__form--label">imię </label>
    </div>
  )
}
