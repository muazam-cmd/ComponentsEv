import Button from './Button'

function App() {

  return <div>
    <div>
      <Button success rounded outline>Click ME</Button>
    </div>
    <div><Button warning>Buy Now</Button></div>
    <div><Button secondary outline>Buy later</Button></div>
  </div>
}

export default App;