import React, { useEffect, useState } from "react";
import axios from "axios";

const Demo = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => setList(res.data));
  }, []);
  return (
    <div>
      Hello
      {list.map((data) => {
        return (
          <div>
            <h1>{data.userId}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Demo;
