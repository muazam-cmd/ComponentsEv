import Dropdown from './pages/Dropdown';

function App() {

  const options = [
    { lable: 'Red', value: 'red' },
    { lable: 'Green', value: 'green' },
    { lable: 'Blue', value: 'blue' },
  ]
  return <Dropdown options={options} />
}
export default App;
