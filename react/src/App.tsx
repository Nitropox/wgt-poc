import React, { useState, useCallback } from 'react';
import './App.css';
import { Input } from './components/input/Input';
import { Select } from './components/select/Select';

export const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [endMessage, setEndMessage] = useState('');

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setEndMessage(`Brawo ${value}! Wybrałeś ${selectedValue} :)`)
  },[selectedValue, value]);
  
  return (
    <div className="container">
      <h1>Witaj drogi deweloperze!</h1>
      <form onSubmit={onSubmit}>
        <Input 
          value={value}
          setValue={setValue}
        />
        <Select 
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          optionsList={['React', 'Preact', 'Svelte']}
        />
        <button type="submit" className="nn-widget__submit--button">Wyślij</button>
      </form>   
      <h2>{endMessage}</h2>
    </div>
  );
}
