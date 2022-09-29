import { useState, useEffect } from "react";
export default function Counter(props) {
  useEffect(() => {
    if (props.life === props.time) {
      console.log(props.id)
      // alert("Game Over");

      props.remove(props.id);
    }
  }, [props]);
  return (
    <div>
      <h1>Counter: {props.init}</h1>
      <p>Expires : {props.life - props.time}</p>
      <button onClick={()=>props.increment(props.id)}>Increment</button>
      <button onClick={()=>props.decrement(props.id)}>Decrement</button>
    </div>
  );
}
