import './App.css'
import { useState } from 'react'

// Props mint string
function StringProps(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
}

// Props mint integer
function IntProps(props) {
  return (
    <div>
      <h1>{props.a + props.b}</h1>
    </div>
  )
}


// Props mint function
function FunctionProps(props) {
  return(
    <div>
      <button onClick={props.increase}>+</button>
      <h1>{props.num}</h1>
      <button onClick={props.decrease}>-</button>
    </div>
  )
}


// Props nesting
// első
function NestingPropsFirst(props) {
  return(
    <div>
      <NestingPropsSecond name={props.name}/>
    </div>
  )
}
// második
function NestingPropsSecond(props) {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}
// Props mint array
function ArrayProps(props) {
  return(
    <div>
      {props.array.map(current => <h1>{current}</h1>)}
    </div>
  )
}


// Props mint object
function ObjectProps(props) {
  return(
    <div>
      <h1>{props.car.type}</h1>
      <h1>{props.car.color}</h1>
      <h1>{props.car.age}</h1>
    </div>
  )
}


function App() {

  const [number, setNumber] = useState(0)
  let name = "kázmér"
  let toyota = {type: "celica", color:"red", age: 26}
  let arr = [2,7,8,"kutya", 10,"tej"]

  function incraseNumber() {
    setNumber((number)=>number+1)
  }
  function decreaseNumber() {
    setNumber((number)=>number-1)
  }
  return (
    <div className="App">
      <div className="container1">
      <h4>------ String props ------</h4>
      <StringProps name={"Béla"} />
      </div>
      <div className="container2">
      <h4>------ Number props ------</h4>
      <IntProps a={6} b={8} />
      </div>
      <div className="container3">
      <h4>------ Function props (useState) ------</h4>
      <FunctionProps num={number} decrease={decreaseNumber} increase={incraseNumber}/>
      </div>
      <div className="container4">
      <h4>------ Nesting props ------</h4>
      <NestingPropsFirst name={name}/>
      </div>
      <div className="container5">
      <h4>------ Array props ------</h4>
      <ArrayProps array={arr}/>
      </div>
      <div className="container6">
      <h4>------ Object props ------</h4>
      <ObjectProps car={toyota}/>
      </div>
    </div>
  );
}

export default App;

