import { FunctionalComponent, h } from "preact";
import { useCallback, useState } from "preact/hooks";
import Input from "./Input";
import Select from "./Select";

const App: FunctionalComponent = () => {
  const [value, setValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [endMessage, setEndMessage] = useState('');

  const onSubmit = useCallback((e: any)=> {
    e.preventDefault();
    setEndMessage(`Brawo ${value}! Wybrałeś ${selectedValue} :)`)
  },[selectedValue, value]);

  return (
    <div id="app" className="container">
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
};

export default App;
