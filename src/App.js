import { useEffect, useState } from "react";
import Counter from "./components/Counter";
export default function App() {
  const [time, setTime] = useState(0);
  const [obj, setObj] = useState([
    {
      id: 1,
      init: 100,
      inc: 1,
      dec: 1,
      life: 10,
    },
    {
      id: 2,
      init: 200,
      inc: 2,
      dec: 2,
      life: 1,
    },
    {
      id: 3,
      init: 300,
      inc: 3,
      dec: 3,
      life: 4,
    },
    {
      id: 4,
      init: 400,
      inc: 4,
      dec: 4,
      life: 6,
    },
    {
      id: 5,
      init: 500,
      inc: 5,
      dec: 5,
      life: 9,
    },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const increment = (id) => {
    setObj(
      obj.map((item) => {
        if (item.id === id) {
          return { ...item, init: item.init + item.inc };
        }
        return item;
      })
    );
  };
  const decrement = (id) => {
    setObj(
      obj.map((item) => {
        if (item.id === id) {
          return { ...item, init: item.init - item.dec };
        }
        return item;
      })
    );
  };
  const remove = (id) => {
    setObj(obj.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {obj.map((ob, index) => {
        return (
          <Counter
            key={index}
            id={ob.id}
            init={ob.init}
            inc={ob.inc}
            dec={ob.dec}
            time={time}
            life={ob.life}
            increment={increment}
            decrement={decrement}
            remove={remove}
          />
        );
      })}
    </div>
  );
}
