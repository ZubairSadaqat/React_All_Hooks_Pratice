import { useEffect, useMemo, useState } from "react";

const UseMemoHook = () => {
  const [theme, settheme] = useState(false);
  const [data, setdata] = useState([]);
  
  async function fetchAllProducts() {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let result = await response.json();
      if (result && result.products) setdata(result.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAllProducts();
  }, []);

  function filteredProductbyPrice(data) {
    console.log(" Filter Products is Getiing called");
    const filteredData = data.filter((item) => item.price > 50);
    return filteredData;
  }

  const memoizefilteredProductbyPrice = useMemo(
    () => filteredProductbyPrice(data),
    [data]
  );

  return (
    <div>
      <h1> Data list</h1>
      <ul>
        {memoizefilteredProductbyPrice.map((item) => {
          return <li key={item.id}> {item.title}</li>;
        })}
      </ul>

      <button
        onClick={() => {
          settheme(!theme);
        }}
      >
        {" "}
        Toggle{" "}
      </button>
      <h1> {theme ? "dark" : "light"}</h1>
    </div>
  );
};

export default UseMemoHook;
