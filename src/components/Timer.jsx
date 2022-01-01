import { useState, useEffect } from "react";

export const Timer = ({ start, end }) => {
  const [counter, setCounter] = useState(+start);

  //   console.log("timer is running")
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((p) => {
        if (p === +end) {
          clearInterval(timer);
          return p;
        } else return p + 1;
      });
    }, 1000);

    return () => {
      console.log("clean up is working");
      clearInterval(timer);
    };
  }, []);

  return <h3>Counter : {counter} </h3>;
};
