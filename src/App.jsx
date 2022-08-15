// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Cars } from './data';

function App() {
  const [getData, setData] = useState(null)

  function getValue(e) {
    setData(Cars.filter((i) => i.type === e.target.value))
  }

  return (
    <div className="App">
      <h2>Type Car</h2>
      <div>
        <h4 className="title">select the type of car</h4>
        {
          [...new Set(Cars.map((a) => a.type))].map((type, index) => (
            <div onChange={getValue} key={index}>
              <input type="radio" id={type} name="typecar" value={type} />
              <label htmlFor={type}>{type}</label>
            </div>
          )
          )
        }
      </div>
      <div>
        {
          getData?.map((data, index) => (
            <ul key={index}>
              <h5 className="title">Detail Car</h5>
              <li>Name: {data.name}</li>
              <li>Type: {data.type}</li>
              <li>cc: {data.cc}</li>
              {
                data.power && <li>Power: {data.power}</li>
              }
            </ul>
          ))
        }
      </div>
    </div>
  );
}

export default App;
