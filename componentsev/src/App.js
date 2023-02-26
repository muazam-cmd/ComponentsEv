import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {

  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { lable: 'Red', value: 'red' },
    { lable: 'Green', value: 'green' },
    { lable: 'Blue', value: 'blue' },
  ]
  return <Dropdown options={options} value={selection} onChange={handleSelect} />;
}
export default App;
