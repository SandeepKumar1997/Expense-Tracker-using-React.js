import Card from "./Card";
import { useState } from "react";
import "./style.css";
import "./TestDate";
import TestDate from "./TestDate";
function TestFile(props) {  
  // const [name, setTitle] = useState(props.name);
  // const clickHandler = () => {
  //   setTitle("change");
  //   console.log(name)
  // };
  return (
    <Card className="container">
      <TestDate date={props.date}></TestDate>
      <div className="item-data">
        <p>{props.name}</p>
      </div>

      <div className="price-tab">
        <span>${props.age}</span>
      </div>
{
      // <button onClick={clickHandler}>Change Title</button> 
    }
    </Card>
  );
}

export default TestFile;
