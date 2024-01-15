import { useState, useEffect } from "react";

const DataFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    }

    fetchData();
  }, []);
  return (
    <div>
      {data.length > 0 ? (
        <>
          {data.map((d) => {
            return (
              <div key={d.id} style={{ border: "1px solid red" }}>
                <h2>{d.title}</h2>
                <p>{d.completed}</p>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DataFetch;
